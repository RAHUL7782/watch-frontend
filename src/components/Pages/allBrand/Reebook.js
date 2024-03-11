import React from "react";
import { Brand1 } from "../../../Data/Data";

const Reebook = () => {
    return (
        <>
            {Brand1.map((item, index) => (
                <div key={index} className="brand-card-container">
                    <img src={item.img} alt="brands" />

                    <div className="brand-card-buttons">
                        <button className="add-to-cart-button">Add to Cart</button>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Reebook;
