import firebaseManager from "../../interface/firebaseManager";

export const get = async (req, res, next) => {
  const listOfCredits = await firebaseManager.getCreditCardDetails();
  res.locals.listOfCredits = Object.values(listOfCredits);
  next();
};

export const post = async (req, res, next) => {
  const error = await firebaseManager.addCreditCardDetails(
    req.body.cardName,
    req.body.cardNumber,
    req.body.limit
  );

  next();
};
