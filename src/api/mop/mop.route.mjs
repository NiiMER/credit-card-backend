import express from "express";
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
 *     operationId: "addPet"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Example"
 *     responses:
 *       405:
 *         description: "Invalid Input"
 *       200:
 *         description: "Invalid Input"
 *       404:
 *         description: "Endpoint Not Found"
 *       500:
 *         description: "Internal server error"
 *     security:
 */
mopRouter.get("/", mopMiddleware.mopValidator);
mopRouter.get("/", mopMiddleware.mopResponse);

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
 *     - "application/xml"
 *     produces:
 *     - "application/xml"
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/Example"
 *     responses:
 *       405:
 *         description: "Invalid input"
 *     security:
 *     - petstore_auth:
 *       - "write:pets"
 *       - "read:pets"
 */
mopRouter.post("/add", (req, res) =>
  res.json({ name: "POST to add method of payment" })
);
// mopRouter.put('/update', (req, res) => res.json({ name: "PUT to update method of payment" }));
// mopRouter.delete('/delete', (req, res) => res.json({ name: "DELETE to remove method of payment" }));

export default mopRouter;
