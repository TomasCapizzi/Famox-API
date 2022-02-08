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
    img: {type: String}
})

module.exports = model('UnidadesSuministro', unidadesSuministrosSchema)