const {Schema, model} = require('mongoose');

const modelosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    uso: {
        type: String,
        required: true
    },
    rango: {
        type: String
    },
    img: {
        type: String
    },
    origen: {
        type: String
    }
})

module.exports = model('Modelos', modelosSchema)