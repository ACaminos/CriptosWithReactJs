import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/styles/styles.css';
import Nav from './components/nav';
import Banner from './components/banner';
import Bitcoin from './components/bitcoin';
import Ethereum from './components/ethereum';
import Litecoin from './components/litecoin';
import Cardano from './components/cardano';
import Polkadot from './components/polkadot';
import Solana from './components/solana';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogecoin from './components/dogecoin';
import Shibainu from './components/shiba';
import Chainlink from './components/chainlink';
import Slider from './components/slider';


ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Slider/>
    <Banner/>
    <div className="container-fluid">
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Bitcoin/>
        </div>
        <div className="col-md-4">
          <Ethereum/>
        </div>
        <div className="col-md-4">
          <Litecoin/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Cardano/>
        </div>
        <div className="col-md-4">
          <Polkadot/>
        </div>
        <div className="col-md-4">
          <Solana/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Dogecoin/>
        </div>
        <div className="col-md-4">
          <Chainlink/>
        </div>
        <div className="col-md-4">
          <Shibainu/>
        </div>
      </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
