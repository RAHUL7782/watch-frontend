import { useState } from "react";
import "../Soping/BuyNow.css";
import CreditCard from "../Homepage/paymentcomponent/CreditCard";
import Upi from "../Homepage/paymentcomponent/Upi";
import PhonePe from "../Homepage/paymentcomponent/PhonePe";
import Cod from "../Homepage/paymentcomponent/Cod";

const BuyNow = () => {
    const [paymethod, setPaymethod] = useState("");
    let myMethod = null;

    const makePayment = (e) => {
        let myval = e.target.value;
        setPaymethod(myval);
    }

    switch(paymethod) {
        case "card":
            myMethod = <CreditCard />;
            break;
        case "upi":
            myMethod = <Upi />;
            break;
        case "phonepay":
            myMethod = <PhonePe />;
            break;
        case "cod":
            myMethod = <Cod />;
            break;
        default:
            myMethod = null;
    }

    return (
        <div className="container">
            <h1>Buy Now</h1>
            <div className="shipping-details">
                <h2>Enter Shipping Details</h2>
                <input type="text" placeholder="Enter your Name" className="input-field" />
                <input type="text" placeholder="Enter Land Mark" className="input-field" />
                <input type="text" placeholder="Enter Mobile Number" className="input-field" />
                <input type="text" placeholder="Enter City" className="input-field" />
                <input type="text" placeholder="Enter State" className="input-field" />
                <input type="text" placeholder="Enter Pin code" className="input-field" />
                <textarea placeholder="Enter Shipping Address" className="input-field" />
            </div>

            <div className="payment-options">
                <h2>Select your payment option</h2>
                <div className="payment-radio">
                    <input type="radio" name="payment" value="card" onClick={makePayment} /> Credit/Debit/Card 
                    <input type="radio" name="payment" value="upi" onClick={makePayment} /> UPI 
                    <input type="radio" name="payment" value="phonepay" onClick={makePayment} /> Phone pay 
                    <input type="radio" name="payment" value="cod" onClick={makePayment} /> Cash on delivery 
                </div>
                {myMethod}
                {/* <button className="make-payment-btn" onClick={makePayment}>Make Payment</button> */}
            </div>
        </div>
    );
}

export default BuyNow;
