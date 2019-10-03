/**
 * Method of payments of JSON Schema.
 *
 */
// const mopBodySchema = {
//   id: "mopBody",
//   type: "object",
//   properties: {
//     userName: {
//       type: "string",
//       required: true
//     },
//     password: {
//       type: "string",
//       required: true,
//       minimum: 6
//     }
//   }
// };

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
      required: true
    },
    limit: {
      type: "number",
      required: true,
      minimum: 0
    }
  }
};

export default mopBodySchema;
