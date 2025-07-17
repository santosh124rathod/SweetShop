const mongoose = require('mongoose');

const SweetSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  category: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Sweet', SweetSchema);
