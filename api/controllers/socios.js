const buildCRUD = require("./utils/buildCRUD");
const SocioSchema = require("../models/validators/Socio");
const Socios = require("../models/Socios");

router = buildCRUD({
    bodySchema: SocioSchema,
    model: Socios,

});

module.exports = router;
