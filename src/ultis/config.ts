import { config } from "dotenv";
import { networks } from "bitcoinjs-lib";

config()
export const network = networks.testnet

export const btcMultisigAddress = '2Mwnxqt1ryXZ1iBHE1dgc1TseQE2bR4kWFP'

export const btcBlockbook = 'https://tbtc1.trezor.io/api/v2'

export const blockbookMethods = {
    tx: 'tx',
    utxo: 'utxo',
    block: 'block',
    sendtx: 'sendtx',
    address: 'address',
    estimatefee: 'estimatefee',
}

export const fullNodeUri = 'https://api.shasta.trongrid.io'
export const solidityNodeUri = 'https://api.shasta.trongrid.io'
export const eventServerUri = 'https://api.shasta.trongrid.io'

export const trxTokenContractAddress = 'TJCSDZAd5Qu9cKunfnKpRAyhnDRyKA8zPD'
export const trxReadOnlyPrivateKey = 'DC3AEC73E3A613B84B8AAB4FD289947A885F7BB00A0075912DFB2C8350A7B622'