const express = require("express");

/**
 *
 * @param {(req: express.Request, res: express.Response, next: express.NextFunction) => Promise<any>} handler
 * @returns (req: express.Request, res: express.Response, next: express.NextFunction) => any
 */
const asynchandler = (handler) => (req, res, next) =>
    handler(req, res, next).then((r) =>
        res.send({
            status: "ok",
            data: r,
        })
    );

module.exports = asynchandler;
