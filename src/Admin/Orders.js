import React from 'react';
import "../Admin/styles/Order.css";
import Admin from '../Admin/Admin';
const Orders = () => {
  // Sample data
  const ordersData = [
    { serialNumber: 1, date: '2024-01-15 14:30:00', orderId: 'OD123456', orderAmount: '$50.00', orderStatus: 'Processing' },
    { serialNumber: 2, date: '2024-01-16 10:45:00', orderId: 'OD789012', orderAmount: '$75.00', orderStatus: 'Shipped' },
    { serialNumber: 3, date: '2024-01-17 16:20:00', orderId: 'OD345678', orderAmount: '$100.00', orderStatus: 'Delivered' },
  ];

  return (
    <section style={{display:"flex"}}>
      <Admin/>
      <div>
          <h1>All Orders</h1>
      <h4>Open an order to <span>Change Order Status.</span></h4>

      
      <table className="orders-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Order ID</th>
            <th>Order Amount</th>
            <th>Order Status</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.serialNumber}</td>
              <td>{new Date(order.date).toLocaleString()}</td>
              <td>{order.orderId}</td>
              <td>{order.orderAmount}</td>
              <td>{order.orderStatus}</td>
              <td> <button> Update Status </button> </td>
            </tr>
          ))}
        </tbody>
      </table>
      

      </div>
    
    </section>



  );
};

export default Orders;
