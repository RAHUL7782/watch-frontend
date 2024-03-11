import React from 'react';
import { Link } from 'react-router-dom';
import '../paymentcomponent/Cod.css';

const Cod = () => {
  return (
    <div>
      <h1>this is code page</h1>
      <div className='logocod'>
        <img src='https://png.pngtree.com/png-clipart/20210523/ourmid/pngtree-cash-on-delivery-pin-point-png-image_3342464.jpg' alt='/' />
      </div>
      <br />
      <br />
      <button className="custom-button">
        <Link to="/PaymentFinish">Make Payment</Link>
      </button>
    </div>
  );
}

export default Cod;
