const {Schema, model} = require('mongoose');

const equiposDigitalesSchema = new Schema({
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
    manual: {type: String},
    img: {type: String},
    modelos: {type: Boolean},
    modelos_: {type: Array}
})

module.exports = model('EquiposDigitales', equiposDigitalesSchema)