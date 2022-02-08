const {Schema, model} = require('mongoose');

const frascosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    uso: {
        type: String,
        required: true
    },
    anmat: {
        type: Boolean
    },
    modelos: {
        type: Boolean
    },
    gases: {
        oxigeno:{type:Boolean},
        aire:{type:Boolean},
        n2o:{type:Boolean},
        n2:{type:Boolean},
        co2:{type:Boolean},
        vacio:{type:Boolean},
        oxigeno_aire:{type:Boolean},
    },
    img: {
        type: String
    }
})

module.exports = model('Frascos', frascosSchema)