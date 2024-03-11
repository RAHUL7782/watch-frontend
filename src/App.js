
// import React, { useState } from 'react';
// import Admin from "./Admin"
import "./Admin/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Men } from "./components/Pages/Men";
import { Women } from "./components/Pages/Women";
import { Brand } from "./components/Pages/Brand";
import LoginCard from "./components/assets/LoginCard/LoginCard";
import RegisterCard from "./components/assets/RegisterCard/RegisterCard";
import Footer from "./components/Homepage/Footer/Footer";
import Shop from "./components/Homepage/Shop/Shop";
import BuyNow  from "./components/Soping/BuyNow";
import PaymentFinish from "./components/Homepage/paymentcomponent/PaymentFinish";
import Dashboard from "./components/Homepage/paymentcomponent/Dashboard";
import Fastrack  from "./components/Pages/allBrand/Fastrack";
import  Reebook from "./components/Pages/allBrand/Reebook" 

// import AddtoCart from "./components/Homepage/Addtocart/AddtoCart"
// import Wishlist from "./components/Homepage/Wishlist/Wishlist";

import Admin from './Admin/Admin';
import AllProducts from './Admin/AllProducts'; 
import AddProduct from './Admin/AddProduct'; 
import Orders from './Admin/Orders';
import Coupon from './Admin/Coupon';
import Categories from './Admin/Categories';
import Brands from './Admin/Brands';
import OrderDetails from './Admin/OrderDetails';
import AdminPage from './Admin/AdminPage';
// import Sdbar from './Sdbar';




function App() {
  // const [state,setState] = useState(false);
  return (
    <>
    
      <Router>
        <NavBar />
      
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/login" element={<LoginCard />} />
            <Route path="/register" element={<RegisterCard />} />
            <Route path="/Buynow" element={<BuyNow/>}/>
            <Route path="/PaymentFinish" element ={<PaymentFinish/>}/>
            <Route path="/dashboard" element ={<Dashboard/>}/>
            <Route path="/fastrack" element ={<Fastrack/>}/>

            <Route path="/reebook" element ={<Reebook/>}/>

            {/* <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/wishlist" element={<Wishlist />} /> */}

            {/* admin  */}

            <Route path='/admin' element={<Admin/>}/>
          <Route path='/adminPage' element={<AdminPage/>}/> 
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path='/add-orders' element={<Orders/>} />
          <Route path='/add-coupon' element={<Coupon/>} />
          <Route path='/add-categories' element={<Categories/>} />
          <Route path='/add-brands' element={<Brands/>} />
          <Route path='/order-details' element={<OrderDetails/>} />
          <Route path='/shop' element={<Shop/>} />
          {/* <Route path='/sdbar' element={<Sdbar/>} /> */}
          

          </Routes>

        </div>
       
      </Router>
    
      <Footer />
    </>
  );
}

export default App;






