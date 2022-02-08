const express = require('express');
const router = express.Router();
const conectoresController = require('../../controllers/conectores.controller');

router.get('/', conectoresController.getProducts);
router.get('/:id', conectoresController.getProductById);
router.post('/', conectoresController.createProduct);
router.delete('/:id', conectoresController.deleteProduct);

module.exports = router