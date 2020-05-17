import jsonschema from "jsonschema";
import { mopBodySchema } from "../../schemes/index.mjs";
import jsonResponse from "../../utils/errorResponder.mjs";

const schemesValidator = new jsonschema.Validator();

export const mopValidator = (req, res, next) => {
  const validationSuccess =
    req.body &&
    !schemesValidator.validate(req.body, mopBodySchema).errors.length &&
    validateCard(req.body.cardNumber);

  if (validationSuccess) {
    return next();
  } else {
    // If there is any error it won't exit the function by the next so it'll return validation error reponse to the client
    res
      .status(400)
      .json(
        jsonResponse(
          "error",
          400,
          "Invalid parameters provided with the request"
        )
      );
  }
};

export const validateCard = (value) => {
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck !== 0 && nCheck % 10 == 0;
};

export const mopResponse = (req, res) => res.json(res.locals.listOfCredits);

export const mopPostResponse = (req, res, next) =>
  res.json(jsonResponse("success", 200, "POST to add method of payment"));
