const express = require('express');
const router = express.Router()
const modeloscontroller = require('../../controllers/modelos.controller');

router.get('/', modeloscontroller.getProducts);
router.get('/:id', modeloscontroller.getProductById);
router.post('/', modeloscontroller.createProduct);
router.delete('/:id', modeloscontroller.deleteProduct);

module.exports = router