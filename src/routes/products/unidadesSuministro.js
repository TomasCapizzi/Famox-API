const express = require('express');
const router = express.Router();
const usController = require('../../controllers/unidadesSuministro.controller');

router.get('/', usController.getProducts);
router.get('/:id', usController.getProductById);
router.post('/', usController.createProduct);
router.delete('/:id', usController.deleteProduct);

module.exports = router;