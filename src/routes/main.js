const {Router} = require('express');
const router = Router();
const gasoterapiaController = require('../controllers/gasoterapia.controller')
const frascosController = require('../controllers/frascos.controller');
const accesoriosController = require('../controllers/accesorios.controller');
const conectoresController = require('../controllers/conectores.controller');
const usController = require('../controllers/unidadesSuministro.controller')

router.get('/gasoterapia', gasoterapiaController.getProducts);
router.get('/frascos', frascosController.getProducts);
router.get('/accesorios', accesoriosController.getProducts);
router.get('/conectores', conectoresController.getProducts);
router.get('/unidades-suministro', usController.getProducts);

module.exports = router