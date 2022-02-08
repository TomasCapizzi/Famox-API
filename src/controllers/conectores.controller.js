const conectoresController = {};
const Conector = require('../models/Conectores');

const getProducts = async (req,res) => {
    const products =  await Conector.find();
    res.json({products});
}
const createProduct = (req,res) => {
    const {nombre, img } =  req.body;
    let product = new Conector({
        nombre,
        img,
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Conector.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {getProducts, createProduct, getProductById, deleteProduct};