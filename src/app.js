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
  "https://famox.com.ar" // si tenés dominio productivo, agregarlo
];
app.use(cors());
app.use(cors({
  origin: allowedOrigins,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(express.json());

//routes
app.use('/api/products', mainRouter);
app.use('/formulario', formRouter);
app.get('/', (req,res)=>{
    res.send('Famox Api');
})

module.exports = app;