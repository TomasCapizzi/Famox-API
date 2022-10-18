const obrasController = {};
const Obra = require('../models/Obras');

const getProducts = async (req,res) => {
    const products =  await Obra.find();
    res.json({products});
}
const createProduct = (req,res) => {
    const {obra, img } =  req.body;
    let product = new Obra({
        obra,
        img,
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Obra.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {getProducts, createProduct, getProductById, deleteProduct};