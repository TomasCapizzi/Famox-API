require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mainRouter = require('./routes/main');
const formRouter = require('./routes/form');

//settings
app.set('port',process.env.PORT || 4000);
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', mainRouter);
app.use('/formulario', formRouter);
app.get('/', (req,res)=>{
    res.send('Famox Api');
})

module.exports = app;