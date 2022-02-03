const gasoterapiaController = {};
const Gasoterapia = require('../models/Gasoterapia');

gasoterapiaController.getProducts = async (req,res) => {
    const products =  await Gasoterapia.find();
    res.json({products})
}

gasoterapiaController.createProduct = (req,res) => {
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

gasoterapiaController.getProductById = (req,res) => res.json({
    message: 'Product'
})

gasoterapiaController.deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})

module.exports = gasoterapiaController