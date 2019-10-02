const errorResponder = (type = "error", status = 500, message = "Error") => ({
  type,
  status,
  message
});

export default errorResponder;
