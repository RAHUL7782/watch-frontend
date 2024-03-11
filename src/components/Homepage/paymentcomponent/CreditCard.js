import { Link } from "react-router-dom";
import "../paymentcomponent/credit.css";

const CreditCard = () => {
  return (
    <div className="container">
      <h1>Credit card page</h1>
      <div className="logocod">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-IP-pBV9HkgXjRRYtGMySEmC6Z3AdTkXFQ&usqp=CAU" alt="/" />
      </div>
      <label htmlFor="cardNumber">Enter 16 Digit card No :</label>
      <input type="text" id="cardNumber" maxLength="16" required/>
      <br />
      <label htmlFor="cvv">Enter CVV :</label>
      <input type="text" id="cvv" maxLength="3"/>
      <br />
      <br />
      <button><Link to="/PaymentFinish">Make Payment</Link></button>
    </div>
  );
}

export default CreditCard;
