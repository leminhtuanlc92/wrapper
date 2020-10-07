"use strict";
exports.__esModule = true;
exports.trxReadOnlyPrivateKey = exports.trxTokenContractAddress = exports.eventServerUri = exports.solidityNodeUri = exports.fullNodeUri = exports.blockbookMethods = exports.btcBlockbook = exports.btcMultisigAddress = exports.network = void 0;
var dotenv_1 = require("dotenv");
var bitcoinjs_lib_1 = require("bitcoinjs-lib");
dotenv_1.config();
exports.network = bitcoinjs_lib_1.networks.testnet;
exports.btcMultisigAddress = '2MvG7S6nVHsY3bUh1nidgqKfAjMV7Rcpryb';
exports.btcBlockbook = 'https://tbtc1.trezor.io/api/v2';
exports.blockbookMethods = {
    tx: 'tx',
    utxo: 'utxo',
    block: 'block',
    sendtx: 'sendtx',
    address: 'address',
    estimatefee: 'estimatefee'
};
exports.fullNodeUri = 'https://api.shasta.trongrid.io';
exports.solidityNodeUri = 'https://api.shasta.trongrid.io';
exports.eventServerUri = 'https://api.shasta.trongrid.io';
exports.trxTokenContractAddress = 'THE9WMdxzgM5UNgW3ZN3pFicTJfjTyszYK';
exports.trxReadOnlyPrivateKey = 'DC3AEC73E3A613B84B8AAB4FD289947A885F7BB00A0075912DFB2C8350A7B622';
