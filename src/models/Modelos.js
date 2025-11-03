const {Schema, model} = require('mongoose');

const modelosSchema = new Schema({
    nombre: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
    },
    uso: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
    },
    rango: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
    },
    img: {
        type: String
    },
    origen: {
        type: String
    }
})

module.exports = model('Modelos', modelosSchema)