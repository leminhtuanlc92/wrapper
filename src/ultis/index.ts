import { payments, ECPair, address, Psbt } from "bitcoinjs-lib";
import * as coinSelect from "coinselect";
import { blockbookMethods, network, trxTokenContractAddress } from "./config";
import { callBlockbook } from "./blockbook";
import { tronWeb } from "./tronWeb";

const getBtcAddress = (params: { privateKey: string }): string => {
    try {
        if (!params.privateKey) throw new Error(`btc private key must be provided`)

        const keyPair = ECPair.fromWIF(params.privateKey, network)

        return payments.p2pkh({ pubkey: keyPair.publicKey, network }).address!
    } catch (e) {
        if (e.message === 'Invalid network version') throw new Error(`invalid private key for network ${process.env.BTC_NETWORK}`)
        if (e.message === 'Invalid checksum') throw new Error(`invalid bitcoin private key`)
        throw e
    }
}

const isValidAddress = (params: { address: string }) => {
    try {
        if (!params.address) throw new Error(`btc address must be provided`)

        return address.toOutputScript(params.address, network) ? true : false
    } catch (e) {
        if (e.message?.includes('has no matching Script')) return false
        throw e
    }
}

const getBtcBalance = async (params: { address: string }): Promise<{ currenceBalance: number, pendingBalance: number }> => {
    try {
        if (!params.address) throw new Error(`btc address must be provided`)

        if (!isValidAddress({ address: params.address })) throw new Error('invalid bitcoin address')

        const { balance, unconfirmedBalance } = await callBlockbook({
            method: blockbookMethods.address,
            data: `${params.address}?details=basic`
        })

        return {
            currenceBalance: parseInt(balance),
            pendingBalance: parseInt(unconfirmedBalance)
        }
    } catch (e) {
        console.log(e);

        throw e
    }
}

const getFeeRate = async () => {
    try {
        const result = await callBlockbook({ method: blockbookMethods.estimatefee, data: 2 })

        const feeRateKilobytePerSatoshi = Number(result?.result)

        if (!feeRateKilobytePerSatoshi) throw new Error(`estimate feerate from api is invalid ${result?.result}`)

        return Math.ceil(feeRateKilobytePerSatoshi * (10 ** 5))
    } catch (e) {
        throw e
    }
}

const getUtxos = async (params: { address: string }): Promise<any[]> => {
    try {
        if (!params.address) throw new Error(`btc address must be provided`)

        const utxos = await callBlockbook({ method: blockbookMethods.utxo, data: params.address })

        return utxos
    } catch (e) {
        console.log(e);

        throw e
    }
}

const getTxDetails = async (params: { hashes: string[] }): Promise<any[]> => {
    try {
        if (!params.hashes) throw new Error(`hashes must be provided`)

        const results = await Promise.all(params.hashes.map(hash => callBlockbook({ method: blockbookMethods.tx, data: hash })))

        return results
    } catch (e) {
        throw e
    }
}


const sendTx = async (params: { privateKey: string, amount: number, toAdress: string, message?: string }) => {
    try {
        if (params.message) if (!tronWeb.isAddress(params.message)) throw new Error(`trx address ${params.message} is not valid`)

        if (!params.privateKey) throw new Error(`btc private key must be provided`)

        const fromAddress = getBtcAddress({ privateKey: params.privateKey })

        if (!params.toAdress) throw new Error(`toAddress must be provided `)

        if (!isValidAddress({ address: params.toAdress })) throw new Error(`toAddress not valid`)

        if (!params.amount) throw new Error(`amount must be provided`)

        if (params.amount < 546) throw new Error(`amount must be larger than 546 satoshi to avoid dust transaction`)

        const feeRate = await getFeeRate()

        // console.log({ feeRate })

        let utxos = await getUtxos({ address: fromAddress })

        // console.log({ utxos })

        utxos = utxos.map(utxo => {
            return {
                txId: utxo.txid,
                vout: utxo.vout,
                value: Number(utxo.value)
            }
        })

        // console.log({ utxos })

        const targets = [
            {
                address: params.toAdress,
                value: params.amount + (params.message ? 45 * feeRate : 0) // trick to ask more fee for op_returns output
            }
        ]

        let { inputs, outputs, fee } = coinSelect(utxos, targets, feeRate)

        console.log({ inputs, outputs, fee })

        if (!inputs || !outputs) throw new Error(`Insufficient funds`)

        const transactions: any[] = await getTxDetails({ hashes: inputs.map(input => input.txId) })

        // console.log({ transactions })

        const psbt = new Psbt({ network })

        for (let i = 0; i < inputs.length; i++) {
            psbt.addInput({
                hash: inputs[i].txId,
                index: inputs[i].vout,
                nonWitnessUtxo: Buffer.from(transactions[i].hex, 'hex')
            })
        }

        for (let i = 0; i < outputs.length; i++) {
            if (outputs[i].address) {
                psbt.addOutput({
                    address: outputs[i].address,
                    value: outputs[i].value - (params.message ? 45 * feeRate : 0)
                })
            } else {
                const value = params.message ? outputs[i].value - 45 * feeRate : outputs[i].value
                if (value < 0) throw new Error(`Insufficient funds`)
                if (value > 0) psbt.addOutput({
                    address: fromAddress,
                    value: outputs[i].value
                })
            }
        }

        if (params.message) psbt.addOutput({
            script: payments.embed({ data: [Buffer.from(params.message, 'utf-8')], network }).output!,
            value: 0
        })

        await psbt.signAllInputsAsync(ECPair.fromWIF(params.privateKey, network))

        psbt.finalizeAllInputs()

        const raw_tx = psbt.extractTransaction().toHex()

        console.log({ raw_tx })

        const result = await callBlockbook({
            method: blockbookMethods.sendtx,
            data: raw_tx
        })

        console.log({ result })

        return result
    } catch (e) {
        throw e
    }
}

const getWbtcBalance = async (params: { trxAddress: string }) => {
    try {
        if (!tronWeb.isAddress(params?.trxAddress)) throw new Error(`invalid trx address`)

        const contract = await tronWeb.contract().at(trxTokenContractAddress)

        const result = await contract.balanceOf(params?.trxAddress).call()

        console.log({ result })

        return tronWeb.toDecimal(result)
    } catch (e) {
        throw e
    }
}

// getWbtcBalance({trxAddress: 'TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT'})

// console.log(getBtcAddress({ privateKey: 'cVj5T5wAgKUyo367w1ezHxXrBXXnG8BL5eAbVqVceya1ikxjLDNz' }))
// getBtcBalance({ address: 'mi7JyT8UAG6Ksd4LJbVuX866ssomxAZAY9' }).then(console.log)
// getFeeRate().then(console.log)
// getUtxos({ address: 'mi7JyT8UAG6Ksd4LJbVuX866ssomxAZAY9' }).then(console.log)

// sendTx({
//     privateKey: 'cVj5T5wAgKUyo367w1ezHxXrBXXnG8BL5eAbVqVceya1ikxjLDNz',
//     amount: 1000,
//     toAdress: '2Mwnxqt1ryXZ1iBHE1dgc1TseQE2bR4kWFP',
//     message: 'TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT'
// }).then(console.log)

export {
    getWbtcBalance,
    getBtcAddress,
    getBtcBalance,
    getFeeRate,
    sendTx
}