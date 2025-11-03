const {Schema, model} = require('mongoose');

const gasoterapiaSchema = new Schema({
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
    rango: {
        es: {type: String},
        en: {type: String},
        pt: {type: String},
    },
    gas: {type: Boolean},
    conexion: {type: Boolean},
    modelos: {type: Boolean},
    anmat: {
        type: Boolean,
        required: false
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
    conector: {
        diss: {type: Boolean},
        afnor:{type:Boolean},
        ss_aga:{type:Boolean},
        ohmeda:{type:Boolean},
        on:{type:Boolean},
        cu:{type:Boolean},
        iram:{type:Boolean},
        yugo:{type:Boolean},
    },
    manual: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
})

module.exports = model('Gasoterapia', gasoterapiaSchema);