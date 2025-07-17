import React, { useEffect, useState } from 'react';
import { getAllSweets, updateQuantity, deleteSweet } from '../services/sweetService';
import SweetCard from './SweetCard';
import './SweetList.css';

const SweetList = () => {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await getAllSweets();
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

const handlePurchase = async (id, quantity) => {
  await updateQuantity(id, -Math.abs(quantity));
  fetchSweets();
};

const handleRestock = async (id, quantity) => {
  await updateQuantity(id, Math.abs(quantity));
  fetchSweets();
};


  const handleDelete = async (id) => {
    await deleteSweet(id);
    fetchSweets();
  };


  return (
    <div className="sweet-list">
      {sweets.map((sweet) => (
        <SweetCard
          key={sweet.id}
          sweet={sweet}
          onPurchase={handlePurchase}
          onRestock={handleRestock}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default SweetList;
