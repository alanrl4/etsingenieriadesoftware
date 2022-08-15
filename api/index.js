const { z, ZodError } = require("zod");

try {
    const r = "";

    const val = z.string({
        required_error: "Es requerido",
        invalid_type_error: "El nombre debe ser una cadena",
    }).min(2, "")

    const fin = val.parse(r);
    console.log("FIN: ", fin);
} catch (e) {
    if (e instanceof ZodError) {
        console.log(e.errors.map((v) => v.message));
    }
}
