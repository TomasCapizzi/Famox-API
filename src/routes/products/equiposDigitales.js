const express = require('express');
const router = express.Router();
const equiposDigitalesController = require('../../controllers/equiposDigitales.controller');

router.get('/', equiposDigitalesController.getProducts);
router.get('/:id', equiposDigitalesController.getProductById);
router.post('/', equiposDigitalesController.createProduct);
router.delete('/:id', equiposDigitalesController.deleteProduct);

module.exports = router;