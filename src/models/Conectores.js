const {Schema, model} = require('mongoose');

const conectoresSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String
    }

})

module.exports = model('Conector', conectoresSchema) 