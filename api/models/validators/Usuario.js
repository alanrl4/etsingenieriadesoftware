const { z } = require("zod");

const UserSchema = z.object({
    nombre: z
        .string({
            invalid_type_error: "El nombre debe ser una cadena",
        })
        .min(2, "El nombre no puede ser menor a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú ,.'-]{2,}$", "i"),
            "El nombre solo puede contener letras"
        ),
    apellidos: z
        .string({
            invalid_type_error: "Los apellidos debe ser una cadena",
        })
        .min(2, "Los apellidos no puede ser menores a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú ,.'-]{2,}$", "i"),
            "Los apellidos solo puede contener letras"
        ),
    usuario: z
        .string({
            invalid_type_error: "El usuario debe ser una cadena",
        })
        .min(2, "El usuario no puede ser menor a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú]{2,}$", "i"),
            "El usuario solo puede contener letras"
        ),
    password: z
        .string({
            invalid_type_error: "La contraseña debe ser una cadena",
        })
        .min(2, "La contraseña no puede ser menor a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú]{2,}$", "i"),
            "La contraseña solo puede contener letras"
        ),
    rol: z
        .string({
            invalid_type_error: "El rol debe ser una cadena de texto",
        })
        .regex(
            new RegExp("^admin$|^instructor$"),
            "El rol del usuario solo puede ser Administrador o Instructor"
        ),
    actividades: z.string().array().optional(),
});

module.exports = UserSchema;
