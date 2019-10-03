import express from "express";
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
 *         description: "Invalid Input"
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
mopRouter.get("/", [mopController.get, mopMiddleware.mopResponse]);

/**
 * @swagger
 * /mop/add:
 *   post:
 *     tags:
 *     - "pet"
 *     summary: "Add a new pet to the store"
 *     description: "hola hola"
 *     operationId: "addPet"
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
 *         $ref: "#/definitions/Example"
 *     responses:
 *       200:
 *         description: "Invalid Input"
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
mopRouter.post("/add", [
  mopMiddleware.mopValidator,
  // mopMiddleware.validateCard,
  mopController.post,
  (req, res) => res.json({ name: "POST to add method of payment" })
]);

export default mopRouter;
