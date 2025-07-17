// import axios from 'axios';

// const API = 'http://localhost:5000/api/sweets';

// export const getAllSweets = () => axios.get(API);
// export const addSweet = (sweet) => axios.post(API, sweet);
// export const deleteSweet = (id) => axios.delete(`${API}/${id}`);//latter added
// export const updateQuantity = (id, quantityChange) =>
//   axios.patch(`${API}/${id}`, { quantityChange });

import axios from 'axios';

const API = 'http://localhost:5000/api/sweets';

export const getAllSweets = () => axios.get(API);
export const addSweet = (sweet) => axios.post(API, sweet);
export const updateQuantity = (id, quantityChange) =>
  axios.patch(`${API}/${id}`, { quantityChange });
export const deleteSweet = (id) => axios.delete(`${API}/${id}`);
