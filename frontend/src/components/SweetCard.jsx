// import React from 'react';
// import './SweetCard.css';

// const SweetCard = ({ sweet, onPurchase, onRestock, onDelete }) => {
//   return (
//     <div className="sweet-card">
//       <h3>{sweet.name}</h3>
//       <p>Category: {sweet.category}</p>
//       <p>Price: ₹{sweet.price}</p>
//       <p>Stock: {sweet.quantity}</p>
//       <div className="actions">
//         <button onClick={() => onPurchase(sweet.id)} className="btn btn-purchase">Purchase</button>
//         <button onClick={() => onRestock(sweet.id)} className="btn btn-restock">Restock</button>
//         <button onClick={() => onDelete(sweet.id)} className="btn btn-delete">Delete</button>
//       </div>
//     </div>
//   );
// };

// export default SweetCard;

import React from 'react';
import './SweetCard.css';

const SweetCard = ({ sweet, onPurchase, onRestock, onDelete }) => {
  const handlePurchaseClick = () => {
    const qty = parseInt(prompt('Enter quantity to purchase:'), 10);
    if (!isNaN(qty) && qty > 0) {
      onPurchase(sweet._id, qty);
    }
  };

  const handleRestockClick = () => {
    const qty = parseInt(prompt('Enter quantity to restock:'), 10);
    if (!isNaN(qty) && qty > 0) {
      onRestock(sweet._id, qty);
    }
  };

  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>
      <div className="actions">
        <button onClick={handlePurchaseClick} className="btn btn-purchase">Purchase</button>
        <button onClick={handleRestockClick} className="btn btn-restock">Restock</button>
        <button onClick={() => onDelete(sweet._id)} className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default SweetCard;
