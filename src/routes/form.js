const {Router} = require('express');
const router = Router();


const controllerContacto = require('../controllers/form/contacto.controller');
const controllerVenta = require('../controllers/form/venta.controller'); 


router.post('/contacto', controllerContacto.postContacto);
router.post('/venta', controllerVenta.postVenta);

router.get('/contacto', controllerContacto.mostrarAlgo)

module.exports = router;