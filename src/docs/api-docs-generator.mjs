import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./api-docs";

/**
 * Generates the Swagger documentation for the project using the express middlewares provided by Swagger. This function
 * will only generate the docs if the current environemnt is not production.
 * @param app Express application to add middlewares on
 */
const addApiDocs = app =>
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default addApiDocs;
