const { z } = require("zod");

module.exports = z.object({
    horario: z.string(),
});
