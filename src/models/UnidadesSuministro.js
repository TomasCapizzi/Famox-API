const {Schema, model} = require('mongoose');

const unidadesSuministrosSchema = new Schema({
    nombre: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
        required: true
    },
    uso: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
        required: true
    },
    anmat: {
        type: Boolean,
        required: false
    },
    img: {type: String},
    gas: {type: Boolean},
    conexion: {type: Boolean},
    modelos: {type: Boolean}
})

module.exports = model('UnidadesSuministro', unidadesSuministrosSchema)