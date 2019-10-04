/**
 * Method of payments of JSON Schema.
 *
 */
const mopBodySchema = {
  id: "mopBodySchema",
  type: "object",
  properties: {
    cardName: {
      type: "string",
      required: true
    },
    cardNumber: {
      type: "string",
      required: true,
      maximum: 19
    },
    limit: {
      type: "number",
      required: true,
      minimum: 0
    }
  }
};

export default mopBodySchema;
