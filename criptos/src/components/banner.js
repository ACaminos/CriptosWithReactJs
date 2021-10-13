import React from "react";
import imgBanner from '../assets/img/toTheMoon.jpg';

function Banner(){
    return(
        <div>
            <div className="">
                <img src={imgBanner} alt="" className="bannerSite"/>
            </div>
        </div>
    )
}
export default Banner;