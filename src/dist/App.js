"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var config_1 = require("./ultis/config");
var config_2 = require("contexts/config");
require("./App.css");
var ultis_1 = require("./ultis");
var tronWeb_1 = require("contexts/tronWeb");
var gif1 = require('assets/images/gif1.gif');
var gif2 = require('assets/images/gif2.gif');
var gif3 = require('assets/images/gif3.gif');
function App() {
    var _this = this;
    var _a = react_1.useState({
        current: 0,
        pending: 0
    }), balance = _a[0], setBalance = _a[1];
    var _b = react_1.useState(0), balanceW = _b[0], setBalanceW = _b[1];
    var _c = react_1.useState(''), privateKey = _c[0], setPrivateKey = _c[1];
    var _d = react_1.useState(''), add = _d[0], setAdd = _d[1];
    var _e = react_1.useState(''), btcAdd = _e[0], setBtcAdd = _e[1];
    var _f = react_1.useState(0), amount = _f[0], setAmount = _f[1];
    var _g = react_1.useState(config_1.btcMultisigAddress), toAdd = _g[0], setToAdd = _g[1];
    var _h = react_1.useState(''), message = _h[0], setMessage = _h[1];
    var _j = react_1.useState(''), errorSend = _j[0], setErrorSend = _j[1];
    var _k = react_1.useState(''), errorUnwrap = _k[0], setErrorUnwrap = _k[1];
    var _l = react_1.useContext(tronWeb_1.TronContext), data = _l.data, _m = _l.action, isConnect = _m.isConnect, address = _m.address;
    var getbalance = function () {
        try {
            ultis_1.getBtcBalance({ address: add }).then(function (e) {
                setBalance({
                    current: e.currenceBalance,
                    pending: e.pendingBalance
                });
            });
        }
        catch (error) {
            console.log('Error', error);
        }
    };
    var getbalanceW = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                data.harambe
                    .balanceOf(btcAdd)
                    .call()
                    .then(function (balance) {
                    setBalanceW(Number(balance));
                });
            }
            catch (error) {
                console.log('Error', error);
            }
            return [2 /*return*/];
        });
    }); };
    // const getBTCBalance = () => {
    //   try {
    //     getWbtcBalance({
    //       trxAddress: btcAdd
    //     }).then((e) => {
    //       console.log('get BTC balance result', e)
    //       setErrorSend(JSON.stringify(e))
    //     })
    //   } catch (error) {
    //     setErrorSend(error.message ? error.message : error)
    //   }
    // }
    var sendBalance = function () {
        try {
            ultis_1.sendTx({
                privateKey: privateKey,
                amount: amount,
                toAdress: toAdd,
                message: message
            }).then(function (e) {
                console.log('send result', e);
                setErrorSend(JSON.stringify(e));
            });
        }
        catch (error) {
            setErrorSend(error.message ? error.message : error);
        }
    };
    var _o = react_1.useState(false), successWrap = _o[0], setSuccessWrap = _o[1];
    var _p = react_1.useState(''), unwrapAddress = _p[0], setUnwrapAddress = _p[1];
    var _q = react_1.useState(0), unwrapAmount = _q[0], setUnwrapAmount = _q[1];
    var actionUnWrap = function () { return __awaiter(_this, void 0, void 0, function () {
        var allowed, allowance, address1, alright, result, add_1, rsSend, alright, add_2, result, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 21, , 22]);
                    if (!((data === null || data === void 0 ? void 0 : data.harambe) && tronWeb_1.tronWeb)) return [3 /*break*/, 20];
                    if (!((data === null || data === void 0 ? void 0 : data.harambe) !== undefined)) return [3 /*break*/, 20];
                    return [4 /*yield*/, data.harambe.allowance(address, config_2.contract.factoryAddress).call()];
                case 1:
                    allowed = _a.sent();
                    console.log('AAAA', allowed);
                    if (!allowed) return [3 /*break*/, 20];
                    allowance = (allowed === null || allowed === void 0 ? void 0 : allowed.remaining) || allowed;
                    if (!(Number(allowance) > Math.pow(10, 15))) return [3 /*break*/, 7];
                    return [4 /*yield*/, window.tronWeb.contract().at(config_2.contract.factoryAddress)];
                case 2:
                    address1 = _a.sent();
                    return [4 /*yield*/, data.harambe.balanceOf(address).call()];
                case 3:
                    alright = _a.sent();
                    if (!(Number(alright) >= unwrapAmount)) return [3 /*break*/, 5];
                    return [4 /*yield*/, address1.unwrap(unwrapAddress, unwrapAmount).send({
                            callValue: 0,
                            feeLimit: 1e7
                        })];
                case 4:
                    result = _a.sent();
                    result && setSuccessWrap(true);
                    console.log('result', result);
                    return [3 /*break*/, 6];
                case 5:
                    setErrorUnwrap('Thiếu tiền rồi cưng!');
                    _a.label = 6;
                case 6: return [3 /*break*/, 19];
                case 7:
                    if (!isConnect) return [3 /*break*/, 18];
                    console.log('here1');
                    console.log('contract.getAddress', config_2.contract.getAddress);
                    return [4 /*yield*/, window.tronWeb.contract().at(config_2.contract.getAddress)];
                case 8:
                    add_1 = _a.sent();
                    console.log('add', add_1);
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 16, , 17]);
                    console.log('Approve address', address);
                    return [4 /*yield*/, add_1.approve(config_2.contract.factoryAddress, tronWeb_1.tronWeb.fromDecimal(Math.pow(10, 64))).send({
                            callValue: 0,
                            feeLimit: 1e7
                        })];
                case 10:
                    rsSend = _a.sent();
                    console.log('rsSend', rsSend);
                    if (!rsSend) return [3 /*break*/, 15];
                    console.log('gohere');
                    return [4 /*yield*/, data.harambe.balanceOf(address).call()
                        // .then((balance) => {
                        //   setBalanceW(Number(balance));
                        // });
                    ];
                case 11:
                    alright = _a.sent();
                    // .then((balance) => {
                    //   setBalanceW(Number(balance));
                    // });
                    console.log('alright', alright);
                    if (!(Number(alright) >= unwrapAmount)) return [3 /*break*/, 14];
                    return [4 /*yield*/, window.tronWeb.contract().at(config_2.contract.getAddress)];
                case 12:
                    add_2 = _a.sent();
                    return [4 /*yield*/, add_2.unwrap(unwrapAddress, unwrapAmount).send({
                            callValue: 0,
                            feeLimit: 1e7
                        })];
                case 13:
                    result = _a.sent();
                    result && setSuccessWrap(true);
                    console.log('result', result);
                    return [3 /*break*/, 15];
                case 14:
                    setErrorUnwrap('Thiếu tiền rồi cưng!');
                    _a.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    error_1 = _a.sent();
                    console.log("error", error_1);
                    if (error_1.message.includes('contract validate error : account not exists')) {
                        setErrorUnwrap('Nạp tiền vào, tiền ko có còn cứ đòi sờ mó!');
                    }
                    else {
                        setErrorUnwrap("L\u1ED7i to\u00E9 loe: " + (error_1.message ? error_1.message : error_1));
                    }
                    return [3 /*break*/, 17];
                case 17: return [3 /*break*/, 19];
                case 18:
                    console.log('Tào lao, connect chưa mà đòi đi tiếp!');
                    _a.label = 19;
                case 19: return [3 /*break*/, 20];
                case 20: return [3 /*break*/, 22];
                case 21:
                    error_2 = _a.sent();
                    console.log("error", error_2);
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("div", { className: "balance" },
                react_1["default"].createElement("div", { className: "get-balance" },
                    react_1["default"].createElement("img", { src: gif1, alt: "" }),
                    react_1["default"].createElement("label", null, "BTC Address:"),
                    react_1["default"].createElement("input", { placeholder: "mi7JyT8UAG6Ksd4LJbVuX866ssomxAZAY9", onChange: function (e) { return setAdd(e.target.value); } }),
                    react_1["default"].createElement("button", { disabled: !(add !== ''), onClick: function () { return getbalance(); } }, "Get BTC Balance"),
                    react_1["default"].createElement("span", null,
                        "Current balance: ",
                        balance.current),
                    react_1["default"].createElement("span", null,
                        "Pending balance: ",
                        balance.pending)),
                react_1["default"].createElement("div", { className: "get-balance-trx" },
                    react_1["default"].createElement("img", { src: gif2, alt: "" }),
                    react_1["default"].createElement("label", null, "TRX Address:"),
                    react_1["default"].createElement("input", { placeholder: "TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT", onChange: function (e) { return setBtcAdd(e.target.value); } }),
                    react_1["default"].createElement("button", { disabled: !(btcAdd !== ''), onClick: function () { return getbalanceW(); } }, "Get WBTC Balance"),
                    react_1["default"].createElement("span", null,
                        "Current balance: ",
                        balanceW))),
            react_1["default"].createElement("div", { className: "action" },
                react_1["default"].createElement("div", { className: "send-balance" },
                    react_1["default"].createElement("img", { src: gif3, alt: "" }),
                    react_1["default"].createElement("input", { placeholder: "Private key", onChange: function (e) { return setPrivateKey(e.target.value); } }),
                    react_1["default"].createElement("input", { placeholder: "Amount: 100", onChange: function (e) { return setAmount(+e.target.value); }, type: "number" }),
                    react_1["default"].createElement("input", { value: config_1.btcMultisigAddress, readOnly: true }),
                    react_1["default"].createElement("input", { placeholder: "TRX address: TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT", onChange: function (e) { return setMessage(e.target.value); }, className: "" + (message === '' ? 'problem' : '') }),
                    react_1["default"].createElement("button", { onClick: function () { return sendBalance(); }, disabled: !(message !== '') }, "Wrap"),
                    errorSend !== '' ?
                        react_1["default"].createElement("span", { className: "error" }, errorSend)
                        : null),
                react_1["default"].createElement("div", { className: "unwrap" },
                    react_1["default"].createElement("img", { src: gif3, alt: "" }),
                    react_1["default"].createElement("input", { placeholder: "BTC Address", onChange: function (e) { return setUnwrapAddress(e.target.value); } }),
                    react_1["default"].createElement("input", { placeholder: "Amount: 100", onChange: function (e) { return setUnwrapAmount(+e.target.value); }, type: "number" }),
                    react_1["default"].createElement("button", { onClick: function () { return actionUnWrap(); }, disabled: !(unwrapAddress !== '' && unwrapAmount >= 1000) }, "Unwrap"),
                    errorUnwrap !== '' ?
                        react_1["default"].createElement("span", { className: "error" }, errorUnwrap)
                        : null,
                    successWrap ?
                        react_1["default"].createElement("span", { className: "success" }, "Th\u00E0nh c\u00F4ng r\u1ED3i! \u0102n m\u1EEBng th\u00F4i!")
                        :
                            null)))));
}
exports["default"] = App;
