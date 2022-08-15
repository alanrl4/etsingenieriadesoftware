const { z } = require("zod");

module.exports = z.object({
    precioInscripcion: z.number(),
    precioMensualidad: z.number(),
    horaApertura: z.date(),
    horaCierra: z.date(),
    diasAbierto: z.number().array().min(0).max(6),
});
