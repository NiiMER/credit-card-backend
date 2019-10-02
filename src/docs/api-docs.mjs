import swaggerJSDoc from "swagger-jsdoc";
import apiRootDocument from "./swagger.json";

const options = {
  swaggerDefinition: apiRootDocument,
  apis: ["./src/api/mop/mop.route.mjs"] // Path to the API docs
};

let swaggerSpec = {};
try {
  swaggerSpec = swaggerJSDoc(options);
} catch (error) {
  console.log(`Error when generating API Docs: ${error.message}`); // eslint-disable-line
}
export default swaggerSpec;
