const productsController = {};
const Product = require('../models/Product');

productsController.getProducts = async (req,res) => {
    const products =  await Product.find();
    res.json({products})
}

productsController.createProduct = (req,res) => {
    const {title, description, img} =  req.body;
    new Product({
        title,
        description,
        img
    })
    res.json({message: 'New product'})
}

productsController.getProductById = (req,res) => res.json({
    message: 'Product'
})

productsController.deleteProduct = (req,res) => res.json({
    message: 'Deleted'
})

module.exports = productsController