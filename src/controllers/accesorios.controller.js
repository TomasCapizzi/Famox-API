const accesoriosController = {};
const Accesorios = require('../models/Accesorios');

const getProducts = async (req,res) => {
    const products =  await Accesorios.find();
    res.json({products})
}

const createProduct = (req,res) => {
    const {nombre, descripcion, img } =  req.body;
    let product = new Accesorios({
        nombre,
        descripcion,
        img,
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    Accesorios.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})



module.exports = {getProducts, createProduct, getProductById, deleteProduct}