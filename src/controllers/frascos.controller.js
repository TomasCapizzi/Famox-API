const frascosController = {};
const Frascos = require('../models/Frascos');

frascosController.getProducts = async (req,res) => {
    const products =  await Frascos.find();
    res.json({products});
}

module.exports = frascosController;