const Modelos = require('../models/Modelos');
const Gasoterapia = require('../models/Gasoterapia');
const Accesorios = require('../models/Accesorios');
const UnidadesSuministro = require('../models/UnidadesSuministro');


const getProducts = async (req,res) => {
    const modelos = await Modelos.find();
    const gasoterapia =  await Gasoterapia.find();
    const accesorios = await Accesorios.find();
    const unidadesSuministro = await UnidadesSuministro.find();    

    const products = {
        modelos,
        gasoterapia,
        accesorios,
        unidadesSuministro,
    }
    res.json({products})
}
const getProductById = (req,res) => {
    Gasoterapia.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

module.exports = {getProducts, getProductById}