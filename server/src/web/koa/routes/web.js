import Router from "@koa/router";

import { checkHealth } from "../controllers/helth-check-controller.js";
import { AuthCurrentUserAction } from "../controllers/user-controller.js";
import errorHandlingMiddleware from "../middlewares/error-handling-middleware.js";
import knexTransactionMiddleware from "../middlewares/knex-transaction-middleware.js";
import { PlansWebCurrentAction } from "../controllers/plans-controller.js";
import { PurchaseStoreBuyCurrentAction } from "../controllers/purchase-controller.js";


const web = new Router();

web.use(errorHandlingMiddleware());
web.use(knexTransactionMiddleware());

web.get("/health-check", checkHealth);
web.get("/plansweb", PlansWebCurrentAction);
web.post("/users/auth", AuthCurrentUserAction);
web.post("/purchase/buy", PurchaseStoreBuyCurrentAction);

export default web;