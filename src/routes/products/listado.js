const express = require('express');
const router = express.Router()
const listadoController = require('../../controllers/listado.controller');


router.get('/', listadoController.getProducts);
router.get('/:id', listadoController.getProductById);


module.exports = router;