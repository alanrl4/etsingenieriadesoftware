const { z } = require("zod");

const SocioSchema = z.object({
    nombre: z
        .string({
            invalid_type_error: "El nombre debe ser una cadena",
        })
        .min(2, "El nombre no puede ser menor a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú ,.'-]{2,}$", "i"),
            "El nombre solo puede contener letras"
        ),
    apellidoPaterno: z
        .string({
            invalid_type_error: "Los apellidos debe ser una cadena",
        })
        .min(2, "Los apellidos no puede ser menores a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú ,.'-]{2,}$", "i"),
            "Los apellidos solo puede contener letras"
        ),
    apellidoMaterno: z
        .string({
            invalid_type_error: "Los apellidos debe ser una cadena",
        })
        .min(2, "Los apellidos no puede ser menores a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú ,.'-]{2,}$", "i"),
            "Los apellidos solo puede contener letras"
        ),
    email: z
        .string({
            invalid_type_error: "El correo electrónico debe ser una cadena",
        })
        .min(2, "El correo electrónico no puede ser menor a dos caracteres")
        .regex(
            new RegExp("^[a-zñáéíóú]{2,}$", "i"),
            "El correo electrónico solo puede contener letras"
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
    fechaNacimiento: z.date({
        invalid_type_error: "La fecha de nacimiendo debe ser una fecha válida",
    }),
});

module.exports = SocioSchema;
