const {Schema, model} = require('mongoose');

const unidadesSuministrosSchema = new Schema({
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