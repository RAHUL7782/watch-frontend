import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    complaint: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      console.log(response.data);

     
      toast.success('Email sent successfully!');

      
      setFormData({
        name: '',
        complaint: '',
        contact: '',
        email: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);

     
      toast.error('Error sending email. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Email Complaint Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Complaint:
            <textarea name="complaint" value={formData.complaint} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Contact:
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

     
      <ToastContainer />
    </div>
  );
};

export default App;
