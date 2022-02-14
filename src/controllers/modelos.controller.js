const Modelos = require('../models/Modelos');

const getProducts = async (req,res) => {
    const products =  await Modelos.find();
    res.json({products});
}

const createProduct = (req,res) => {
    const {nombre, uso, rango, img, origen } =  req.body;
    let product = new Modelos({
        nombre,
        uso,
        rango,
        img,
        origen,
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Modelos.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {createProduct, getProducts, getProductById, deleteProduct};