const express = require('express');
const cors = require('cors')
const app = express();

//settings
app.set('port',process.env.PORT || 4000)
app.use(express.static('public'));

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', require('./routes/main'));
app.get('/', (req,res)=>{
    res.send('Famox Api')
})

module.exports = app;