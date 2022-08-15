const { Schema, model } = require("mongoose");

const modelName = "horarios";
const modelSchema = new Schema({
    actividad: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "actividades",
    },
    entrenador: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "usuarios",
    },
    suplente: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "usuarios",
    },
    hora: {
        type: Date,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    esRecurrente: {
        type: Boolean,
        required: false,
        default: false,
    },
    periodoRecurrencia: {
        type: Number,
        required: false,
        default: 0,
    },
    fechaFin: {
        type: Date,
        required: false,
        default: null,
    },
});

module.exports = model(modelName, modelSchema);
