import jsonschema from "jsonschema";
import { mopBodySchema } from "../../schemes/index";
import errorResponder from "../../utils/errorResponder";

const schemesValidator = new jsonschema.Validator();

export const mopValidator = (req, res, next) => {
  req.body &&
    !schemesValidator.validate(req.body, mopBodySchema).errors.length &&
    validateCard(req.body.cardNumber) &&
    next();

  // If there is any error it won't exit the function by the next so it'll return validation error reponse to the client
  res
    .status(403)
    .json(
      errorResponder(
        "error",
        403,
        "Invalid parameters provided with the request"
      )
    );
};

export const validateCard = value => {
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
