const express = require("express");
const cors = require("cors");
const { ZodError } = require("zod");

const router = require("./controllers/index");

(async () => {
    const app = express();

    app.use(cors());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );

    app.use("/api", router);

    app.get("/*", (req, res) => {
        res.sendFile(`${__dirname}/views/dist/index.html`);
    });
    app.use(function (err, req, res, next) {
        let message = err.message ? err.message : "Ocurrio un error inesperado";
        if (err instanceof ZodError) {
            message = err.errors.map((v) => v.message).shift();
        }

        res.send({
            status: "error",
            message: message,
        });
    });

    app.listen(3030, () =>
        console.log("Servidor escuchando en el puerto 3030")
    );
})();
