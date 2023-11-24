const EquiposDigitales = require('../models/EquiposDigitales');

const getProducts = async (req,res) => {
    const products =  await EquiposDigitales.find();
    res.json({products});
}

const createProduct = (req,res) => {
    const {nombre, uso, img, anmat, manual, modelos } =  req.body;
    let product = new EquiposDigitales({
        nombre,
        uso,
        anmat,
        manual,
        img,
        modelos
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    EquiposDigitales.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {createProduct, getProductById, getProducts, deleteProduct};