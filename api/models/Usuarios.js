const { Schema, model } = require("mongoose");

const modelName = "usuarios";
const modelSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    passowrd: {
        type: String,
        required: true,
    },
    fotoPerfil: {
        type: String,
        required: false,
        default: "",
    },
    rol: {
        type: String,
        required: true,
        enum: ["admin", "instructor"],
    },
    actividades: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: [],
        ref: "actividades",
    },
});

module.exports = model(modelName, modelSchema);
