import React, { useState, useContext } from 'react';
import { btcMultisigAddress, trxTokenContractAddress } from './ultis/config'
import './App.css';
import { getBtcBalance, sendTx, getWbtcBalance } from './ultis'
import { TronContext } from "contexts/tronWeb";
const gif1 = require('assets/images/gif1.gif')
const gif2 = require('assets/images/gif2.gif')
const gif3 = require('assets/images/gif3.gif')
function App() {
  const [balance, setBalance] = useState({
    current: 0,
    pending: 0
  })
  const [balanceW, setBalanceW] = useState(0)
  const [privateKey, setPrivateKey] = useState('')
  const [add, setAdd] = useState('')
  const [btcAdd, setBtcAdd] = useState('')
  const [amount, setAmount] = useState(0)
  const [toAdd, setToAdd] = useState(btcMultisigAddress)
  const [message, setMessage] = useState('')
  const [errorSend, setErrorSend] = useState('')
  const { data } = useContext(TronContext)
  const getbalance = () => {
    try {
      getBtcBalance({ address: add }).then((e) => {
        setBalance({
          current: e.currenceBalance,
          pending: e.pendingBalance
        })
      }
      )
    } catch (error) {
      console.log('Error', error)
    }
  }

  const getbalanceW = async () => {
    try {
      data.harambe
      .balanceOf(btcAdd)
      .call()
      .then((balance) => {
        setBalanceW(Number(balance));
      });
    } catch (error) {
      console.log('Error', error)
    }
  }


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
  const action = () => {
    try {
      sendTx({
        privateKey: privateKey,
        amount: amount,
        toAdress: toAdd,
        message,
      }).then((e) => {
        console.log('send result', e)
        setErrorSend(JSON.stringify(e))
      })
    } catch (error) {
      setErrorSend(error.message ? error.message : error)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="get-balance">
          <img src={gif1} alt="" />
          <label>BTC Address:</label>
          <input placeholder=" mi7JyT8UAG6Ksd4LJbVuX866ssomxAZAY9" onChange={(e) => setAdd(e.target.value)} />
          <button className="balance" disabled={!(add !== '')} onClick={() => getbalance()} >Get Balance</button>
          <span>Current balance: {balance.current}</span>
          <span>Pending balance: {balance.pending}</span>
        </div>

        <div className="get-balance-trx">
          <img src={gif2} alt="" />
          <input placeholder="TRX Address: TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT" onChange={(e) => setBtcAdd(e.target.value)} />
          <button className="balance" disabled={!(btcAdd !== '')} onClick={() => getbalanceW()} >Get WBTC Balance</button>
          <span>Current balance: {balanceW}</span>
        </div>


        <div className="send-balance">
          <img src={gif3} alt="" />
          <input placeholder="Private key" onChange={(e) => setPrivateKey(e.target.value)} />
          <input placeholder="Amount: 100" onChange={(e) => setAmount(+e.target.value)} type="number" />
          <input value={btcMultisigAddress} readOnly />
          <input placeholder="Message: TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT" onChange={(e) => setMessage(e.target.value)} className={`${message === '' ? 'problem' : ''}`} />
          <button onClick={() => action()} disabled={!(message !== '')}>Send</button>
          {errorSend !== '' ?
            <span className="error">{errorSend}</span>
            : null}
        </div>
      </header>
    </div>
  );
}
export default App;
