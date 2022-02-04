const gasoterapiaController = {};
const Gasoterapia = require('../models/Gasoterapia');

const getProducts = async (req,res) => {
    const products =  await Gasoterapia.find();
    res.json({products})
}

const createProduct = (req,res) => {
    const {nombre, uso, rango, anmat, gases, conector, manual, img } =  req.body;
    new Gasoterapia({
        nombre,
        uso,
        img,
        rango,
        anmat,
        gases,
        conector,
        manual
    })
    res.json({message: 'New product'})
}

const getProductById = (req,res) => res.json({
    message: 'Product'
})

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})

module.exports = {createProduct, getProducts, getProductById, deleteProduct}