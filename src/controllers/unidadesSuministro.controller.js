const unidSumController = {}
const UnidadesSuministro = require('../models/UnidadesSuministro');

const getProducts = async (req,res) => {
    const products =  await UnidadesSuministro.find();
    res.json({products});
}

const createProduct = (req,res) => {
    const {nombre, uso, img, anmat } =  req.body;
    let product = new UnidadesSuministro({
        nombre,
        uso,
        img,
        anmat
    })
    product.save((err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product);
    })
}

const getProductById = (req,res) => {
    UnidadesSuministro.findById(req.params.id, (err, product)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(product)
    })
}

const deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})


module.exports = {createProduct, getProductById, getProducts, deleteProduct};