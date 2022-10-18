const express = require('express');
const router = express.Router();
const obrasController = require('../../controllers/obras.controller');

router.get('/', obrasController.getProducts);
router.get('/:id', obrasController.getProductById);
router.post('/', obrasController.createProduct);
router.delete('/:id', obrasController.deleteProduct);

module.exports = router