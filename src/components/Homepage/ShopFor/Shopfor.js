
import React from "react";
import "../ShopFor/Shopfor.css";
import Slide from "../Slider/Slide";

import picture from "../../../components/Homepage/ShopFor/Sonata.png"


const shopfor =()=>{
    return(
        <>
        <div className="shopheading">
            <h2>Shop For</h2>
        </div>

        <div>
            <Slide/>
        </div>

        <div className="shopheading1">
            <img src={picture}  alt="Mountains"/>
        </div>

        </>
    );
}
export default shopfor;