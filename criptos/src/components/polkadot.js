import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/styles.css';
import logoPolkadot from '../assets/img/polkadot.png';

function Polkadot(){
    return(
            <div className="card bg-black">
                <img src={logoPolkadot} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Polkadot</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, soluta? Ipsa totam odit debitis similique! Repellendus cum voluptate aliquam. Praesentium.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="btn btn-secondary btn-sm">Mas detalles</a>
                </div>
            </div>
    )
}
export default Polkadot;