const { Schema, model } = require("mongoose");

const modelName = "pagos";
const modelSchema = new Schema(
    {
        concepto: {
            type: String,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        estado: {
            type: String,
            required: false,
            default: "idle",
            enum: ["idle", "pending", "success", "error", "cancelled"],
        },
        socio: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "socios",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model(modelName, modelSchema);
