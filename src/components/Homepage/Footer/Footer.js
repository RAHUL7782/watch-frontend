import React from 'react';
import '../Footer/Foter.css'; // Import CSS file for styling

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2>Menu</h2>
          <p>Men</p>
          <p>Women</p>
          <p>Products</p>

        </div>


        <div className="footer-column">
          <h2>Usefull Links</h2>
          <p>Your Accounts</p>
          <p>Help</p>
          <p>About Us</p>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-column">
          <h2>Contact </h2>
          <p>MP nagar Zone 1 462023</p>
          <p>mywatch123@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website | All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

