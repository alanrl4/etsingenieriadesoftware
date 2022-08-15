const { Schema, model } = require("mongoose");

const modelName = "actividades";
const modelSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagenes: {
        type: [String],
        required: false,
        default: [],
    },
    entrenadorParticular: {
        type: Boolean,
        required: false,
        default: 0,
    },
    precio: {
        type: Number,
        required: false,
        default: 0,
    },
});

module.exports = model(modelName, modelSchema);
