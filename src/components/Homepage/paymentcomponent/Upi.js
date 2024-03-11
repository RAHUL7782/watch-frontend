import React from "react";
import "../paymentcomponent/Upi.css";
import { Link } from "react-router-dom";
const Upi = () => {
  return (
    <div>
      <br/>
      <div className="niii">
      <img src="https://cdn.zeebiz.com/sites/default/files/2024/01/03/274966-upigpay.jpg" alt="/"/>
      </div>
      <h1>Upi page</h1>
      Exp. Your@12
      <br/>
      Enter Your UPI number : <input type="text" />
      <br/>
      <br/>

      <button><Link to="/PaymentFinish"> Make Payment</Link></button>

    </div>
  );
};

export default Upi;
