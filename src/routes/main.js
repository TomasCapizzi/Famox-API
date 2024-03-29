const {Router} = require('express');
const router = Router();


const gasoterapiaRouter = require('./products/gasoterapia');
const usRouter = require('./products/unidadesSuministro');
const accesoriosRouter = require('./products/accesorios');
const equiposDigitalesRouter = require('./products/equiposDigitales');
const obrasRouter = require('./products/obras');
const modelosRouter = require('./products/modelos');
const listadoRouter = require('./products/listado');


router.use('/gasoterapia', gasoterapiaRouter);
router.use('/unidades-suministro', usRouter)
router.use('/accesorios', accesoriosRouter);
router.use('/equipos-digitales', equiposDigitalesRouter);
router.use('/modelos', modelosRouter);
router.use('/obras', obrasRouter);
router.use('/listado', listadoRouter);

module.exports = router;