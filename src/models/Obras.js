const {Schema, model} = require('mongoose');

const obraSchema = new Schema({
    obra: {
        type: String,
        required: true
    },
    img: {
        type: String
    }

})

module.exports = model('Obra', obraSchema) 