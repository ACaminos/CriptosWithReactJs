import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/styles.css';
import logoChain from '../assets/img/chainlink.png';

function Chainlink(){
    return(
            <div className="card bg-black">
                <img src={logoChain} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Chainlink</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, soluta? Ipsa totam odit debitis similique! Repellendus cum voluptate aliquam. Praesentium.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="btn btn-warning btn-sm">Mas detalles</a>
                </div>
            </div>
    )
}
export default Chainlink;