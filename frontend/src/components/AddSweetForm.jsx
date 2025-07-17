import React, { useState } from 'react';
import { addSweet } from '../services/sweetService';

const AddSweetForm = ({ onSweetAdded }) => {
  const [formData, setFormData] = useState({ id: '', name: '', category: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSweet(formData);
    onSweetAdded();
    setFormData({ id: '', name: '', category: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Add New Sweet</h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} className="p-2 border" required />
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border" required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="p-2 border" required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border" required />
        <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="p-2 border" required />
      </div>
      <button type="submit" className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Sweet</button>
    </form>
  );
};

export default AddSweetForm;