import React from 'react';
import { Link } from 'react-router-dom'; 
import "../Admin/styles/OrderDetails.css";
import Admin from '../Admin/Admin';
const OrderDetails = () => {
  
  const orderDetails = {
    name: 'John Doe',
    orderId: '234567ferver54566',
    orderAmount: '$3444',
    coupon: '10%',
    paymentMethod: 'Stripe',
    orderStatus: 'Processing',
    shippingAddress: {
      address: '404, Bhopal',
      state: 'MP',
      country: 'IN',
    },
    products: [
      { serialNumber: 1, productName: 'Product 1', price: '$20', quantity: 2, total: '$40' },
      { serialNumber: 2, productName: 'Product 2', price: '$25', quantity: 1, total: '$25' },
     
    ],
  };

  
  const handleUpdateStatus = () => {
    
  };

  return (
    <section style={{display:"flex"}}>
      <Admin/>
    <div className="order-details">
      <h1>Order Details</h1>
      <Link to="/order-details" className="back-link">
        <span>&#8592;</span> Back to Orders
      </Link>
      <p>Ship to {orderDetails.name}</p>
      <p>Order ID {orderDetails.orderId}</p>
      <p>Order Amount {orderDetails.orderAmount}</p>
      <p>Coupon {orderDetails.coupon}</p>
      <p>Payment Method {orderDetails.paymentMethod}</p>
      <p>Order Status {orderDetails.orderStatus}</p>
      <p>Shipping Address</p>
      <p>Address: {orderDetails.shippingAddress.address}</p>
      <p>State: {orderDetails.shippingAddress.state}</p>
      <p>Country: {orderDetails.shippingAddress.country}</p>

      <table className="order-products-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.products.map((product) => (
            <tr key={product.serialNumber}>
              <td>{product.serialNumber}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.total}</td>
              <td>
                <button>Review Product</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      <button className="download-pdf-btn">Download as PDF</button>

      <div className="update-status-box">
        <h1>Update Status</h1>
        <select>
          <option value="choose">Choose one</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          {/* Add more status options as needed */}
        </select>
        <button onClick={handleUpdateStatus}>Update Status</button>
      </div>
    </div>
    </section>
  );
};

export default OrderDetails;
