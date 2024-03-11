import "../Admin/styles/AdminPage.css";
import Admin from "../Admin/Admin";

import React from 'react';
import { FaDollarSign, FaShoppingCart, FaBox } from 'react-icons/fa';
import OrderStatusChart from './OrderStatusChart';

// Box component for each section
const Box = ({ title, value, icon, boxClass }) => (
  <div className={`Box ${boxClass}`}>
    <span>{icon}</span>
    <div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  </div>
);

const AdminPage = () => {
  return (
    <>
     <div style={{display:"flex"}}>
     <Admin/>
     

    <div>
     <h1>Admin DashBoard</h1>

      <div className="BoxContainer">
        <Box title="Earning" value="5000 INR" icon={<FaDollarSign />} boxClass="Box1" />
        <Box title="Products" value="50" icon={<FaShoppingCart />} boxClass="Box2" />
        <Box title="Orders" value="10" icon={<FaBox />} boxClass="Box3" />
      </div>

      <OrderStatusChart/>
    </div>
    </div>
    </>
  );
}

export default AdminPage;
