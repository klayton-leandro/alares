import Router from "@koa/router";

import { checkHealth } from "../controllers/helth-check-controller.js";
import errorHandlingMiddleware from "../middlewares/error-handling-middleware.js";
import knexTransactionMiddleware from "../middlewares/knex-transaction-middleware.js";


const web = new Router();

web.use(errorHandlingMiddleware());
web.use(knexTransactionMiddleware());

web.get("/health-check", checkHealth);

export default web;