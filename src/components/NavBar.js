import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux"
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function NavBar() {
  const mycart = useSelector((state)=>state.cartSlice.cart);
  const itemLength = mycart.length;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <span className="name">R.K</span>
            <span className="Watch">Watch</span>
            <span className="Store">Store</span>

            {/* <i className="fas fa-code"></i>
            <span className="icon">
              <CodeIcon />
            </span> */}
          </Link>


          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <div className="admin">
              <li className="nav-item">
                <Link
                  exact
                  to="/admin"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Admin
                </Link>
              </li>
            </div>


            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>


            <li className="nav-item">
              <Link
                exact
                to="/men"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/women"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Women
              </Link>
            </li>

            <li className="nav-item">
              <Link
                exact
                to="/brand"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Brand
              </Link>


            </li>



            {/* icons  */}

            <li className="nav-item">
              <Link
                exact
                to="/login"
                activeClassName="active"
                className="nav-user"
                onClick={handleClick}
              >
                <FaRegUserCircle />
              </Link>

            </li>


            <li className="nav-item">
              <Link
                exact
                to="/shop"
                activeClassName="active"
                className="nav-user"
                onClick={handleClick}
              >
                <FaShoppingCart /> {itemLength}
              </Link>


            </li>

            <li className="nav-item">
              <Link
                exact
                to="/shop"
                activeClassName="active"
                className="nav-user"
                onClick={handleClick}
              >
                <FaRegHeart /> {itemLength}
              </Link>


            </li>
          </ul>



          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
