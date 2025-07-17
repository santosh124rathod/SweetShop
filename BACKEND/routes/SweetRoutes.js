const express = require('express');
const router = express.Router();
const sweetController = require('../controllers/sweetController');

router.get('/', sweetController.getAllSweets);
router.get('/:id', sweetController.getSweetById);
router.post('/', sweetController.createSweet);
router.delete('/:id', sweetController.deleteSweet);
router.patch('/:id', sweetController.updateSweetQuantity);

module.exports = router;
