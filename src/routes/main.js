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

//GASOTERAPIA
router.use('/gasoterapia', gasoterapiaRouter);
router.use('/unidades-suministro', usRouter)
router.use('/accesorios', accesoriosRouter);
router.use('/frascos', frascosRouter);
router.use('/conectores', conectoresRouter);
// FRASCOS


// CONECTORES


module.exports = router;