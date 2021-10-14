import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/styles.css';
import LogoLitecoin from '../assets/img/litecoin.png';

function Litecoin(){
    return(
            <div className="card bg-black">
                <img src={LogoLitecoin} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Litecoin</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, soluta? Ipsa totam odit debitis similique! Repellendus cum voluptate aliquam. Praesentium.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="btn btn-primary btn-sm">Mas detalles</a>
                </div>
            </div>
    )
}
export default Litecoin;