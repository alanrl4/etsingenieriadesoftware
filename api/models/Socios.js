const { Schema, model } = require("mongoose");

const modelName = "socios";
const modelSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidoPaterno: {
        type: String,
        required: true,
    },
    apellidoMaterno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    agenda: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: [],
        ref: "horarios",
    },
    membresiaActiva: {
        type: Boolean,
        required: false,
        default: false,
    },
    ultimoCobroMensualidad: {
        type: Date,
        required: false,
        default: Date.now,
    },
});

module.exports = model(modelName, modelSchema);
