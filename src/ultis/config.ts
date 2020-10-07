import { config } from "dotenv";
import { networks } from "bitcoinjs-lib";

config()
export const network = networks.testnet

export const btcMultisigAddress = '2MvG7S6nVHsY3bUh1nidgqKfAjMV7Rcpryb'

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

export const trxTokenContractAddress = 'THE9WMdxzgM5UNgW3ZN3pFicTJfjTyszYK'
export const trxReadOnlyPrivateKey = 'DC3AEC73E3A613B84B8AAB4FD289947A885F7BB00A0075912DFB2C8350A7B622'