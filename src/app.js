require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const mainRouter = require('./routes/main')

//settings
app.set('port',process.env.PORT || 4000)
app.use(express.static('public'));

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', mainRouter);
app.get('/', (req,res)=>{
    res.send('Famox Api')
})

module.exports = app;