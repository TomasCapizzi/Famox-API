const express = require('express');
const router = express.Router()
const frascosController = require('../../controllers/frascos.controller');

router.get('/', frascosController.getProducts);
router.get('/:id', frascosController.getProductById);
router.post('/', frascosController.createProduct);
router.delete('/:id', frascosController.deleteProduct);

module.exports = router