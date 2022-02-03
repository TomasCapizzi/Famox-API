const accesoriosController = {};
const Accesorios = require('../models/Accesorios');

accesoriosController.getProducts = async (req,res) => {
    const products =  await Accesorios.find();
    res.json({products})
}

module.exports = accesoriosController