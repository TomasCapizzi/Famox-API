const {Schema, model} = require('mongoose');

const equiposDigitalesSchema = new Schema({
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
    manual: {type: String},
    img: {type: String},
    modelos: {type: Boolean},
    modelos_: {type: Array}
})

module.exports = model('EquiposDigitales', equiposDigitalesSchema)