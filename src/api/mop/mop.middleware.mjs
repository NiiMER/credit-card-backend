export const mopValidator = (req, res, next) => next();
export const mopResponse = (req, res) =>
  res.json({ name: "GET method of payments list!" });
