const { Router } = require("express");
const mongoose = require("mongoose");
const { ZodSchema } = require("zod");
const asynchandler = require("./asynchandler");

/**
 *
 * @param {{bodySchema : ZodSchema, model: mongoose.Model<any>, errorMessages: {add: string, update: string, get: string, delete: string, list: string, select: string}, populate: string[] }}} options
 * @return Router
 */
function buildCRUD({ bodySchema, model: Model, errorMessages, populate }) {
    const router = Router();

    router.post(
        "/add",
        asynchandler(async (req, res) => {
            const m = new Model(bodySchema.parse(req.body));
            await m.save().catch((e) => {
                throw new Error(errorMessages.add);
            });

            return null;
        })
    );

    router.post(
        "/update/:id",
        asynchandler(async (req, res) => {
            const { id } = req.params;
            const m = await Model.findById(id)
                .exec()
                .catch((e) => {
                    throw new Error(errorMessages.update);
                });

            const body = bodySchema.parse(req.body);
            Object.keys(body).forEach((k) => {
                m[k] = body[k];
            });

            await m.save().catch((e) => {
                throw new Error(errorMessages.update);
            });

            return null;
        })
    );

    router.get(
        "/delete/:id",
        asynchandler(async (req, res) => {
            const { id } = req.params;
            await Model.deleteOne({ _id: id })
                .exec()
                .catch((e) => {
                    throw new Error(errorMessages.delete);
                });

            return null;
        })
    );

    router.get(
        "/get/:id",
        asynchandler(async (req, res) => {
            const { id } = req.params;
            const m = Model.findById(id);

            if (populate) {
                populate.map((v) => m.populate(v));
            }

            return await m.exec().catch((e) => {
                throw new Error(errorMessages.get);
            });
        })
    );

    router.get("/list", async (req, res) => {
        const m = Model.find();

        if (populate) {
            populate.map((v) => m.populate(v));
        }

        return await m.exec().catch((e) => {
            throw new Error(errorMessages.list);
        });
    });

    return router;
}

module.exports = buildCRUD;
