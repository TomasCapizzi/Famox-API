const {Schema, model} = require('mongoose');

const obrasSchema = new Schema({
    obra: {
        type: String,
        required: true
    },
    img: {
        type: String
    }

})

module.exports = model('Obra', obrasSchema) 