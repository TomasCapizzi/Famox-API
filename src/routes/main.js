const {Router} = require('express');
const router = Router();
const gasoterapiaController = require('../controllers/gasoterapia.controller')
const frascosController = require('../controllers/frascos.controller');
const accesoriosController = require('../controllers/accesorios.controller');
const conectoresController = require('../controllers/conectores.controller');
const usController = require('../controllers/unidadesSuministro.controller')

const gasoterapiaRouter = require('./products/gasoterapia');
const usRouter = require('./products/unidadesSuministro');
const accesoriosRouter = require('./products/accesorios');
const frascosRouter = require('./products/frascos');
const conectoresRouter = require('./products/conectores');
const modelosRouter = require('./products/modelos');

//GASOTERAPIA
router.use('/gasoterapia', gasoterapiaRouter);
router.use('/unidades-suministro', usRouter)
router.use('/accesorios', accesoriosRouter);
router.use('/modelos', modelosRouter);
router.use('/conectores', conectoresRouter);

module.exports = router;