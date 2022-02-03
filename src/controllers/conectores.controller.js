const conectoresController = {};
const Conector = require('../models/Conectores');

conectoresController.getProducts = async (req,res) => {
    const products =  await Conector.find();
    res.json({products});
}

module.exports = conectoresController;