"use strict";

import express from "express";
import bodyParser from "body-parser";
import {errorHandlerMiddleware} from "../middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(errorHandlerMiddleware);

export default app;