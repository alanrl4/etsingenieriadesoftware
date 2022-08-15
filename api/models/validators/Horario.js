const { z } = require("zod");

module.exports = z.object({
    actividad: z.string(),
    entrenador: z.string(),
    suplente: z.string(),
    hora: z.date(),
    fecha: z.date(),
    duracion: z.number().min(30),
    esRecurrente: z.boolean().default(false),
    periodoRecurrencia: z.number().min(0).default(0),
    fechaFin: z.date().default(null),
});
