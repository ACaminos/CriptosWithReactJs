import React from "react";
import '../assets/styles/styles.css';
import moon from '../assets/icons/moon-landing.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={moon} alt="" width="30" height="30" className="d-inline-block align-text-top"/>&nbsp;<span className="toTheMoon">To the moon!</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Criptomonedas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Precios</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <button type="button" class="suscriptionButton btn btn-light btn-sm">Suscribirse</button>
                </span>
                </div>
            </div>
        </nav>
    )
}
export default Nav