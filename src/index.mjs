import express from "express";
import cors from "cors";
import config from "config";
import PrettyError from "pretty-error";
import bodyParser from "body-parser";
import mopRouter from "./api/mop/mop.route";
import addApiDocs from "./docs/api-docs-generator";
import { errorHandler, errorNotFoundHandler } from "./utils/errorResponder";

import firebaseManager from "./interface/firebaseManager";

// instantiate PrettyError, which can then be used to render error objects
const pe = new PrettyError();
pe.start();

const app = express();
const port = process.env.PORT || config.get("app.defaultPort") || 3000;

firebaseManager.initFirebase();

addApiDocs(app);

app
  .use(cors())
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  // All the main endpoints will go here
  .use("/mop", cors(), mopRouter)

  .use(errorHandler)
  .use("*", errorNotFoundHandler)

  .listen(port, () => console.log(`Example app listening on port ${port}!`)); // eslint-disable-line
