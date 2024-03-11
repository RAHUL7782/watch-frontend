import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import "../Admin/styles/SidMain.css";
import { useState, useEffect } from "react";
const Sdbar = () => {


  const [Uname, setUname]= useState("");

  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token)
    {
      const decodeToken = parseJwt(token);
      const username = decodeToken.username;
      setUname(username);
    }
  },[])

  const parseJwt = (token)=>{
    try{
      return JSON.parse(atob(token.split('.')[1]));
    }
    catch(e){
      return null;
    }
  };
  
  const handlelogout=()=>{
    setUname("")
    localStorage.removeItem("token");
  }

  return (
    <>
      <div className="sidebar" id='sidebar'>
      <div className="user-info">
        <FaUser className="user" size="2x" />
        <p>{Uname}</p>
      </div>
      <nav className="nav-lin">
        <Link to="/adminPage" >Admin Page</Link>
        <Link to="/all-products">All Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/add-orders">Orders</Link>
        <Link to="/add-coupon">Coupon</Link>
        <Link to="/add-categories">Categories</Link>
        <Link to="/add-brands">Brands</Link>
        <Link to="/order-details">OrderDetails</Link>
        <Link to="/" onClick={handlelogout}>LogOut</Link>
        
        
        
      </nav>
    </div>
 
    </>

  );
};

export default Sdbar;
