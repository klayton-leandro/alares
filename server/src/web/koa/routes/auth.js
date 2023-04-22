import Router from "@koa/router";

import knexTransactionMiddleware from "../middlewares/knex-transaction-middleware.js";
import errorHandlingMiddleware from "../middlewares/error-handling-middleware.js";
import { fetchCurrentUserAction, storeCurrentUserAction } from "../controllers/user-controller.js";
import { PurchaseStoreCurrentAction } from "../controllers/purchase-controller.js";
import { PlansCurrentStoreAction } from "../controllers/plans-controller.js";

const auth = new Router();

auth.use(errorHandlingMiddleware());
auth.use(knexTransactionMiddleware());

auth.post("/users/create", storeCurrentUserAction);
auth.get("/users/:id", fetchCurrentUserAction);
auth.post("/purchase/create", PurchaseStoreCurrentAction);
auth.post("/plans/create", PlansCurrentStoreAction);

export default auth;
