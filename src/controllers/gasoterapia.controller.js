const gasoterapiaController = {};
const Gasoterapia = require('../models/Gasoterapia');

const getProducts = async (req,res) => {
    const products =  await Gasoterapia.find();
    res.json({products})
}

const createProduct = (req,res) => {
    const {nombre, uso, rango, anmat, gases, conector, manual, img } =  req.body;
    let product = new Gasoterapia({
        nombre,
        uso,
        img,
        rango,
        anmat,
        gases,
        conector,
        manual
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Gasoterapia.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})

module.exports = {createProduct, getProducts, getProductById, deleteProduct}