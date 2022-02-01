const {Router} = require('express');
const router = Router();
const {getProducts, getProductById, createProduct, deleteProduct} = require('../controllers/products.controller');

router.route('/').get(getProducts);

router.route('/').post(createProduct);

router.route('/').delete(deleteProduct);

router.route('/:id').get(getProductById);

module.exports = router;