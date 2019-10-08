import express from "express";
import cors from "cors";
import * as mopController from "./mop.controller";
import * as mopMiddleware from "./mop.middleware";

const mopRouter = express.Router();

/**
 * @swagger
 * /mop:
 *   get:
 *     tags:
 *     - "credit list"
 *     summary: "Get all credit card in a list"
 *     description: "Endpoint to get a list of stored credit cards as array of json"
 *     operationId: "getCards"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     responses:
 *       200:
 *         description: "Endpoint successfully get data"
 *       404:
 *         description: "Endpoint Not Found"
 *         schema:
 *            type: "object"
 *            $ref: "#/definitions/ApiResponseNotFound"
 *       500:
 *         description: "Internal server error"
 *         schema:
 *            type: "object"
 *            $ref: "#/definitions/ApiResponseServerError"
 */
mopRouter.get("/", cors(), [mopController.get, mopMiddleware.mopResponse]);

/**
 * @swagger
 * /mop/add:
 *   post:
 *     tags:
 *     - "credit list"
 *     summary: "Add a new pet to the store"
 *     description: "hola hola"
 *     operationId: "addCard"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "New card body information provided in the request"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/PostCardRequestBodyExample"
 *     responses:
 *       200:
 *         description: "Successful credit card addition"
 *       404:
 *         description: "Endpoint Not Found unified response"
 *         schema:
 *            type: "object"
 *            $ref: "#/definitions/ApiResponseNotFound"
 *       500:
 *         description: "Internal server error unified reponse"
 *         schema:
 *            type: "object"
 *            $ref: "#/definitions/ApiResponseServerError"
 */
mopRouter.post("/add", cors(), [
  mopMiddleware.mopValidator,
  mopController.post,
  mopMiddleware.mopPostResponse
]);

export default mopRouter;
