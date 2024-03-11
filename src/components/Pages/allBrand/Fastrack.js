import React from "react";
import { Brand1 } from "../../../Data/Data";
import "../allBrand/Fastrack.css"

const Fastrack = () => {
    return (
        <>
            <div className="fastrackmain">
                {Brand1.map((item, index) => (
                    <div key={index} className="brand-card-container">
                        <img src={item.img} alt="brands" />
                        <div >
                            <p className="para">{item.para}</p>
                            <br />
                            <p className="price">{item.price}</p>
                        </div>


                        <div className="brand-card-buttons">
                            <button className="add-to-cart-button">Add to Cart</button>
                            <button className="buy-now-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Fastrack;
