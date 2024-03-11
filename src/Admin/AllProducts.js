// AllProducts.js

import React, { useState } from 'react';
import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "../Admin/styles/AllProduct.css";
import Admin from '../Admin/Admin';

const PAGE_SIZE = 5; // Set the number of products per page

const AllProducts = () => {
  // Sample product data
  const products = [
    { sn: 1, name: 'Product 1', category: 'Category A', price: 100, quantity: 2 },
    { sn: 2, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 3, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 4, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 5, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 6, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 7, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 8, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 9, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 10, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 11, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 12, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 13, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 14, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 15, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 16, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 17, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 18, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 19, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    { sn: 20, name: 'Product 2', category: 'Category B', price: 150, quantity: 3 },
    
    // Add more products as needed
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  // Calculate products to display on the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <section style={{display:"flex"}} >
        <Admin/>
        <div>
        <h1>All Products Page</h1>

<div className="search-container">
  <div className="products-found">Products Found</div>
  <div className="search-input">
    <input type="text" placeholder="Search Products" />
    <FaSearch className="search-ico" />
  </div>
</div>

<table className="product-table">
  <thead>
    <tr>
      <th>S/N</th>
      <th>Name</th>
      <th>Categories</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Value</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {currentProducts.map((product) => (
      <tr key={product.sn}>
        <td>{product.sn}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>INR {product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.price * product.quantity}</td>
        <td>
          <FaEye className="action-icon" />
          <FaEdit className="action-icon" />
          <FaTrash className="action-icon" />
        </td>
      </tr>
    ))}
  </tbody>
</table>

{/* Pagination controls */}
<div className="pagination">
  <button
    disabled={currentPage === 1}
    onClick={() => handlePageChange(currentPage - 1)}
  >
    Prev
  </button>
  <span>{currentPage}</span>
  <button
    disabled={currentPage === totalPages}
    onClick={() => handlePageChange(currentPage + 1)}
  >
    Next
  </button>
</div>
        </div>

      </section>
    </div>
  );
};

export default AllProducts;
