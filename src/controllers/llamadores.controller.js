const Llamadores = require('../models/Llamadores');

const getProducts = async (req,res) => {
    const products =  await Llamadores.find();
    res.json({products});
}

const createProduct = (req,res) => {
    const {nombre, uso, img, anmat, manual, modelos } =  req.body;
    let product = new Llamadores({
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
    Llamadores.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {createProduct, getProductById, getProducts, deleteProduct};