/**
 * Method of payments of JSON Schema.
 *
 */
const mopBodySchema = {
  id: "mopBody",
  type: "object",
  properties: {
    userName: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true,
      minimum: 6
    }
  }
};

export default mopBodySchema;
