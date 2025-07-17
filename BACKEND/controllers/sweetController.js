const Sweet = require('../models/Sweet');

// GET all sweets
const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sweets' });
  }
};

// GET sweet by ID
const getSweetById = async (req, res) => {
  try {
    const sweet = await Sweet.findOne({ id: req.params.id });
    if (!sweet) return res.status(404).json({ error: 'Sweet not found' });
    res.json(sweet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sweet' });
  }
};

// ADD new sweet
const createSweet = async (req, res) => {
  try {
    const sweet = new Sweet(req.body);
    await sweet.save();
    res.status(201).json(sweet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE sweet
const deleteSweet = async (req, res) => {
  try {
    const result = await Sweet.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0)
      return res.status(404).json({ error: 'Sweet not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete sweet' });
  }
};

// PURCHASE or RESTOCK sweet
const updateSweetQuantity = async (req, res) => {
  const { quantityChange } = req.body;
  try {
    const sweet = await Sweet.findOne({ id: req.params.id });
    if (!sweet) return res.status(404).json({ error: 'Sweet not found' });

    if (sweet.quantity + quantityChange < 0)
      return res.status(400).json({ error: 'Insufficient stock' });

    sweet.quantity += quantityChange;
    await sweet.save();
    res.json(sweet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update quantity' });
  }
};

module.exports = {
  getAllSweets,
  getSweetById,
  createSweet,
  deleteSweet,
  updateSweetQuantity
};

