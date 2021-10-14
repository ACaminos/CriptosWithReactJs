import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/styles.css';
import logoSolana from '../assets/img/solana.png';

function Solana(){
    return(
            <div className="card bg-black">
                <img src={logoSolana} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Solana</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, soluta? Ipsa totam odit debitis similique! Repellendus cum voluptate aliquam. Praesentium.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="btn btn-warning btn-sm">Mas detalles</a>
                </div>
            </div>
    )
}
export default Solana;