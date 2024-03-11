// Brands.js

import React, { useState } from 'react';
import "../Admin/styles/Brands.css";
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon from react-icons
import Admin from '../Admin/Admin';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ["Select Category", "Shoes", "Clothing", "Electronics"]; // Add your categories here

  const handleSaveBrand = () => {
    // Validate and save the brand to the state
    if (brandName && selectedCategory !== "Select Category") {
      const newBrand = {
        serialNumber: brands.length + 1,
        name: brandName,
        category: selectedCategory,
      };

      setBrands([...brands, newBrand]);

      // Clear the form fields after saving the brand
      setBrandName('');
      setSelectedCategory('Select Category');
    }
  };

  const handleDeleteBrand = (serialNumber) => {
    // Delete the brand based on serial number
    const updatedBrands = brands.filter((brand) => brand.serialNumber !== serialNumber);
    setBrands(updatedBrands);
  };

  return (
    <section style={{display:"flex"}}>
      <Admin/>
    <div className="brands-container">
      <hr />
      <h1>Create Brand</h1>
      <p>Use the form to create a brand.</p>

      {/* Brand Form */}
      <div className="brand-form">
        <label>Brand Name:</label>
        <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        <label>Parent Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleSaveBrand}>Save Brand</button>
      </div>

      <h1>All Brands</h1>
      
      {/* Brands Table */}
      <table className="brands-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.serialNumber}>
              <td>{brand.serialNumber}</td>
              <td>{brand.name}</td>
              <td>{brand.category}</td>
              <td>
                <button onClick={() => handleDeleteBrand(brand.serialNumber)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default Brands;
