const express = require('express');
const router = express.Router();
const llamadoresController = require('../../controllers/llamadores.controller');

router.get('/', llamadoresController.getProducts);
router.get('/:id', llamadoresController.getProductById);
router.post('/', llamadoresController.createProduct);
router.delete('/:id', llamadoresController.deleteProduct);

module.exports = router;