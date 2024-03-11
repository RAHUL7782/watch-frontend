// Categories.js

import React, { useState } from 'react';
import "../Admin/styles/Categorie.css";
import { FaTrash } from 'react-icons/fa'; // Import the trash can icon from react-icons
import Admin from '../Admin/Admin';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  const handleSaveCategory = () => {
    // Validate and save the category to the state
    if (categoryName) {
      const newCategory = {
        serialNumber: categories.length + 1,
        name: categoryName,
      };

      setCategories([...categories, newCategory]);

      // Clear the form field after saving the category
      setCategoryName('');
    }
  };

  const handleDeleteCategory = (serialNumber) => {
    // Delete the category based on serial number
    const updatedCategories = categories.filter((category) => category.serialNumber !== serialNumber);
    setCategories(updatedCategories);
  };

  return (
    <section style={{display:"flex"}}>
      <Admin/>
    <div className="categories-container">
      <hr />
      <h1>Create Category</h1>
      <p>Use the form to create a category.</p>

      {/* Category Form */}
      <div className="category-form">
        <label>Category Name:</label>
        <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        <button onClick={handleSaveCategory}>Save Category</button>
      </div>

      <h1>All Categories</h1>
      
      {/* Categories Table */}
      <table className="categories-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.serialNumber}>
              <td>{category.serialNumber}</td>
              <td>{category.name}</td>
              <td>
                <button onClick={() => handleDeleteCategory(category.serialNumber)}>
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

export default Categories;
