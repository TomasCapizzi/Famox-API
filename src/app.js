require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const mainRouter = require('./routes/main');
const formRouter = require('./routes/form');

//settings
app.set('port',process.env.PORT || 4000);
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//set views file
//app.set('views',path.join(__dirname,'views'));
			
//set view engine
//app.set('view engine', 'ejs');
app.use(bodyParser.json());

//middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "https://famox.com.ar",
  "https://www.famox.com.ar"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(express.json());

//routes
app.use('/api/products', mainRouter);
app.use('/formulario', formRouter);
app.get('/', (req,res)=>{
    res.send('Famox Api');
})

module.exports = app;