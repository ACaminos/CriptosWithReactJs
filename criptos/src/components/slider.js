import React from "react";
import '../assets/styles/styles.css';

function Slider(){
    return(
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <span className="info">Bitcoin<span className="suba"><i class="fas fa-long-arrow-alt-up"></i>1,23%</span></span>
                </div>
                <div className="slide">
                    <span className="info">Ethereum</span>
                </div>
                <div className="slide">
                    <span className="info">Litecoin</span>
                </div>
                <div className="slide">
                    <span className="info">Polkadot<span className="suba"><i className="fas fa-long-arrow-alt-up text-white"></i>1,23%</span></span>
                </div>
                <div className="slide">
                    <span className="info">Cardano<span className="suba"><i class="fas fa-long-arrow-alt-down"></i>1,23%</span></span>
                </div>
                <div className="slide">
                    <span className="info">Chainlink</span>
                </div>
                <div className="slide">
                    <span className="info">Dogecoin</span>
                </div>
                <div className="slide">
                    <span className="info">Shiba Inu</span>
                </div>
                <div className="slide">
                    <span className="info">Solana</span>
                </div>
                <div className="slide">
                    <span className="info">Tether</span>
                </div>
                <div className="slide">
                    <span className="info">Uniswap</span>
                </div>
                <div className="slide">
                    <span className="info">Stellar</span>
                </div>
                <div className="slide">
                    <span className="info">Filecoin</span>
                </div>
                <div className="slide">
                    <span className="info">Dai</span>
                </div>
            </div>
        </div>
    )
}
export default Slider;