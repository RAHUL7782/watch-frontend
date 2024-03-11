// OrderStatusChart.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const OrderStatusChart = () => {
  const data = [
    { name: 'Pending', value: 5 },
    { name: 'Processing', value: 15 },
    { name: 'Shipped', value: 8 },
    { name: 'Delivered', value: 12 },
  ];

  return (
    <div>
      <h2>Order Status Chart</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default OrderStatusChart;


