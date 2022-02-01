const express = require('express');
const cors = require('cors')
const app = express();
const productsRouter = require('./routes/products');

//settings
app.set('port',process.env.PORT || 4000)

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', require('./routes/products'))

module.exports = app;