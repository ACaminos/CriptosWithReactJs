import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabledd</a>
            </li>
        </ul>
    )
}
export default Nav