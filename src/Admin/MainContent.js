import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProducts from "../Admin/AllProducts"
import AddProduct from '../Admin/AddProduct'; 
import Orders from '../Admin/Orders';
import Coupon from '../Admin/Coupon';
import Categories from '../Admin/Categories';
import Brands from '../Admin/Brands';
import OrderDetails from '../Admin/OrderDetails';
import AdminPage from '../Admin/AdminPage';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/adminPage' element={<AdminPage/>}/> 
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path='/add-orders' element={<Orders/>} />
        <Route path='/add-coupon' element={<Coupon/>} />
        <Route path='/add-categories' element={<Categories/>} />
        <Route path='/add-brands' element={<Brands/>} />
        <Route path='/order-details' element={<OrderDetails/>} />
        
      </Routes>
    </div>
  );
};

export default MainContent;
