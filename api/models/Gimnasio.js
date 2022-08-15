const { Schema, model } = require("mongoose");

const modelName = "gimnasio";
const modelSchema = new Schema({
    precioInscripcion: {
        type: Number,
        required: false,
        default: 500,
    },
    precioMensualidad: {
        type: Number,
        required: false,
        default: 200,
    },
    horaApertura: {
        type: Date,
        required: false,
        default: Date.now,
    },
    horaCierre: {
        type: Date,
        required: false,
        default: Date.now,
    },
    diasAbierto: {
        type: Date,
        required: false,
        default: Date.now,
    },
});

module.exports = model(modelName, modelSchema);
