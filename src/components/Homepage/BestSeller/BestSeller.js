import React from "react";
import "../BestSeller/BestSeller.css";
import BestCollection from "../ShopCollection/ShopByCollection";
import  Seller  from "../../assets/SellerCrousel/CellectionSeller"
// import { Seller } from "../../../Data/Data";


const BestSeller =()=>{
    return (
        <>
          <div className="best">
                <h1> Best Seller</h1>
                </div>
                <Seller/>

                <BestCollection/>
               
        </>
    );
};
export default BestSeller;
