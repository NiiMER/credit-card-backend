const jsonResponse = (type = "error", status = 500, message = "Error") => ({
  type,
  status,
  message,
});

export default jsonResponse;

export const errorHandler = (err, req, res, next) =>
  (!!err &&
    res
      .status(err.statusCode || 500)
      .json(
        jsonResponse(
          "error",
          err.statusCode || 500,
          err.message || "Error serving request"
        )
      )) ||
  next();

export const errorNotFoundHandler = (req, res, next) =>
  res.status(404).json(jsonResponse("error", 404, "Endpoint not found"));
