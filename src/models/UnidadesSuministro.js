const {Schema, model} = require('mongoose');

const unidadesSuministrosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    uso: {
        type: String,
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