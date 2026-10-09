const {Schema, model} = require('mongoose');

const obraSchema = new Schema({
    obra: {
        type: String,
        required: true
    },
    img: {
        type: Array
    },
    instalacion: {
        type: Object
    },
    slug: {
        type: String,
    },

})

module.exports = model('Obra', obraSchema) 