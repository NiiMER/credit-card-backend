import firebaseManager from "../../interface/firebaseManager";

export const get = async (req, res, next) => {
  const listOfCredits = await firebaseManager.getCreditCardDetails();
  res.locals.listOfCredits = listOfCredits;
  next();
};

export const post = (req, res, next) => {
  firebaseManager.addCreditCardDetails(req.body);
  next();
};
