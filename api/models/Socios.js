const { Schema, model } = require("mongoose");

const agendaSchema = new Schema({
    horario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "horarios",
    },
    entrenador: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "usuarios",
        default: null,
    },
    suplente: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "usuarios",
        default: null,
    },
});

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
    fotoPerfil: {
        type: String,
        required: false,
        default: "",
    },
    agenda: {
        type: [agendaSchema],
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
