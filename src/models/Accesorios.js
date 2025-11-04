const {Schema, model} = require('mongoose');

const accesoriosSchema = new Schema({
    nombre: {
        type: Object,
        required: true
    },
    descripcion: {
        type: Object,
        required: true
    },
    img: {
        type: String,
        required: false
    }
})

module.exports = model('Accesorios', accesoriosSchema)