const frascosController = {};
const Frascos = require('../models/Frascos');

const getProducts = async (req,res) => {
    const products =  await Frascos.find();
    res.json({products});
}

const createProduct = (req,res) => {
    const {nombre, img } =  req.body;
    let product = new Frascos({
        nombre,
        img,
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Frascos.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {createProduct, getProducts, getProductById, deleteProduct};