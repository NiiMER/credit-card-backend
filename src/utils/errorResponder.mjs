const errorResponder = (type = "error", status = 500, message = "Error") => ({
  type,
  status,
  message
});

export default errorResponder;

export const errorHandler = (err, req, res, next) =>
  (!!err &&
    res
      .status(err.statusCode || 500)
      .json(
        errorResponder(
          "error",
          err.statusCode || 500,
          err.message || "Error serving request"
        )
      )) ||
  next();

export const errorNotFoundHandler = (req, res, next) =>
  res.status(404).json(errorResponder("error", 404, "Endpoint not found"));
