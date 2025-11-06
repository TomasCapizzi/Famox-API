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

// 🔹 Middleware de CORS
app.use(cors({
  origin: function (origin, callback) {
    // permitir requests sin origen (como en Postman o curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log('Origen bloqueado por CORS:', origin);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));
// Necesario para los preflight requests OPTIONS
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', mainRouter);
app.use('/formulario', formRouter);
app.get('/', (req,res)=>{
    res.send('Famox Api');
})

module.exports = app;