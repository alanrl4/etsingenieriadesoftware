const { z } = require("zod");

module.export = z.object({
    nombre: z.string().min(2),
    descripcion: z.string().min(10),
    entrenadorParticular: z.boolean(),
    precio: z.number().min(1),
});
