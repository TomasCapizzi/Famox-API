const unidSumController = {}
const UnidadesSuministro = require('../models/UnidadesSuministro');

unidSumController.getProducts = async (req,res) => {
    const products =  await UnidadesSuministro.find();
    res.json({products});
}

module.exports = unidSumController;