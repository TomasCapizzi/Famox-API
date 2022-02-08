const {Schema, model} = require('mongoose');

const accesoriosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
})

module.exports = model('Accesorios', accesoriosSchema)