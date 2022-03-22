const {Router} = require('express');
const router = Router();


const controllerContacto = require('../controllers/form/contacto.controller');
const controllerVenta = require('../controllers/form/venta.controller'); 


router.post('/contacto', controllerContacto.postContacto);
router.post('/venta', controllerVenta.postCotizacion);

router.get('/contacto', controllerContacto.mostrarAlgo)
router.get('/venta', controllerVenta.mostrarCotizacion)

module.exports = router;