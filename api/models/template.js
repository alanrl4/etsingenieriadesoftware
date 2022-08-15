const { Schema, model } = require("mongoose");

const modelName = "socios";
const modelSchema = new Schema({
    nombre: {
        type: String,
    },
});

module.exports = model(modelName, modelSchema);
