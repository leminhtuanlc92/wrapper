import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from "components/globalStyle";
import TronContext from 'contexts/tronWeb';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TronContext>
      <App />
    </TronContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
