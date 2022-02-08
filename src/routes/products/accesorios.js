const express = require('express');
const router = express.Router()
const accesoriosController = require('../../controllers/accesorios.controller');

router.get('/', accesoriosController.getProducts);
router.get('/:id', accesoriosController.getProductById);
router.post('/', accesoriosController.createProduct);
router.delete('/:id', accesoriosController.deleteProduct);


module.exports = router