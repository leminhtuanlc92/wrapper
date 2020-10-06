import React, { useState, useContext, useEffect } from 'react';
import { btcMultisigAddress } from './ultis/config'
import { contract } from 'contexts/config'
import './App.css';
import { getBtcBalance, sendTx, getWbtcBalance } from './ultis'
import { TronContext, tronWeb } from "contexts/tronWeb";
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
  const { data, action: { isConnect, address } } = useContext(TronContext)
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
  const sendBalance = () => {
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

  const [unwrapAddress, setUnwrapAddress] = useState('')
  const [unwrapAmount, setUnwrapAmount] = useState(0)
  const actionUnWrap = async () => {
    try {
      if (data?.harambe && tronWeb) {
        if (data?.harambe !== undefined) {
          let allowed = await data.harambe.allowance(address, contract.factoryAddress).call()
          if (allowed) {
            let allowance = allowed?.remaining || allowed;
            if (Number(allowance) > 10 ** 15) {
              let address = await (window as any).tronWeb.contract().at(contract.factoryAddress)
              let alright = await data.harambe.balanceOf(unwrapAddress).call()
              if (Number(alright) >= unwrapAmount) {
                let result = await address.unwrap(unwrapAddress, unwrapAmount).send({
                  callValue: 0,
                  feeLimit: 1e7,
                });
                console.log('result', result)
              }
            }
            else {
              if (isConnect) {
                console.log('here1')
                let add = await (window as any).tronWeb.contract().at(contract.getAddress)
                try {
                  let rsSend = await add.approve(contract.factoryAddress, tronWeb.fromDecimal(10 ** 64)).send({
                    callValue: 0,
                    feeLimit: 1e7,
                  });
                  console.log('rsSend', rsSend)
                  if (rsSend) {
                    let add = await (window as any).tronWeb.contract().at(contract.getAddress)
                    let alright = await data.harambe.balanceOf(unwrapAddress).call()
                    // .then((balance) => {
                    //   setBalanceW(Number(balance));
                    // });
                    console.log('alright', alright)
                    if (Number(alright) >= unwrapAmount) {
                      let result = await add.unwrap(unwrapAddress, unwrapAmount).send({
                        callValue: 0,
                        feeLimit: 1e7,
                      });
                      console.log('result', result)
                    }
                    // console.log('result', result)
                  }
                } catch (error) {
                  console.log("error", error)
                }
              }
              else {
                console.log('I dont know how i came here - ah no, not connect babe')
              }
            }
          }
        }
      }
    }
    catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="balance">
          <div className="get-balance">
            <img src={gif1} alt="" />
            <label>BTC Address:</label>
            <input placeholder="mi7JyT8UAG6Ksd4LJbVuX866ssomxAZAY9" onChange={(e) => setAdd(e.target.value)} />
            <button disabled={!(add !== '')} onClick={() => getbalance()} >Get BTC Balance</button>
            <span>Current balance: {balance.current}</span>
            <span>Pending balance: {balance.pending}</span>
          </div>

          <div className="get-balance-trx">
            <img src={gif2} alt="" />
            <label>TRX Address:</label>
            <input placeholder="TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT" onChange={(e) => setBtcAdd(e.target.value)} />
            <button disabled={!(btcAdd !== '')} onClick={() => getbalanceW()} >Get WBTC Balance</button>
            <span>Current balance: {balanceW}</span>
          </div>
        </div>

        <div className="action">
          <div className="send-balance">
            <img src={gif3} alt="" />
            <input placeholder="Private key" onChange={(e) => setPrivateKey(e.target.value)} />
            <input placeholder="Amount: 100" onChange={(e) => setAmount(+e.target.value)} type="number" />
            <input value={btcMultisigAddress} readOnly />
            <input placeholder="TRX address: TDmYMKhVZTX7Xc2jEtmGmLNp5i8uCEnarT" onChange={(e) => setMessage(e.target.value)} className={`${message === '' ? 'problem' : ''}`} />
            <button onClick={() => sendBalance()} disabled={!(message !== '')}>Wrap</button>
            {errorSend !== '' ?
              <span className="error">{errorSend}</span>
              : null}
          </div>

          <div className="unwrap">
            <img src={gif3} alt="" />
            <input placeholder="BTC Address" onChange={(e) => setUnwrapAddress(e.target.value)} />
            <input placeholder="Amount: 100" onChange={(e) => setUnwrapAmount(+e.target.value)} type="number" />
            <button onClick={() => actionUnWrap()} disabled={!(unwrapAddress !== '' && unwrapAmount > 0)}>Unwrap</button>
          </div>
        </div>

      </header>
    </div>
  );
}
export default App;
