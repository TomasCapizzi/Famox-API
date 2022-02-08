const express = require('express');
const router = express.Router()
const gasoterapiaController = require('../../controllers/gasoterapia.controller');


router.get('/', gasoterapiaController.getProducts);
router.post('/', gasoterapiaController.createProduct);
router.get('/:id', gasoterapiaController.getProductById);
router.delete('/:id', gasoterapiaController.deleteProduct);


module.exports = router;