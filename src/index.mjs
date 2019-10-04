import express from "express";
import config from "config";
import PrettyError from "pretty-error";
import bodyParser from "body-parser";
import mopRouter from "./api/mop/mop.route";
import addApiDocs from "./docs/api-docs-generator";
import errorResponder from "./utils/errorResponder";

import firebaseManager from "./interface/firebaseManager";

// instantiate PrettyError, which can then be used to render error objects
const pe = new PrettyError();
pe.start();

const app = express();

const port = process.env.PORT || config.get("app.defaultPort") || 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

firebaseManager.initFirebase();

addApiDocs(app);

// All the main endpoints will go here
app.use("/mop", mopRouter);

app.use(
  (err, req, res, next) =>
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
    next()
);
app.use("*", (req, res, next) =>
  res.status(404).json(errorResponder("error", 404, "Endpoint not found"))
);

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
