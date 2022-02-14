const {Router} = require('express');
const router = Router();


const gasoterapiaRouter = require('./products/gasoterapia');
const usRouter = require('./products/unidadesSuministro');
const accesoriosRouter = require('./products/accesorios');
const conectoresRouter = require('./products/conectores');
const modelosRouter = require('./products/modelos');
const listadoRouter = require('./products/listado');


router.use('/gasoterapia', gasoterapiaRouter);
router.use('/unidades-suministro', usRouter)
router.use('/accesorios', accesoriosRouter);
router.use('/modelos', modelosRouter);
router.use('/conectores', conectoresRouter);
router.use('/listado', listadoRouter)

module.exports = router;