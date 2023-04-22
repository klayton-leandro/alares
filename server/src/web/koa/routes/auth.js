import Router from "@koa/router";

import knexTransactionMiddleware from "../middlewares/knex-transaction-middleware.js";
import errorHandlingMiddleware from "../middlewares/error-handling-middleware.js";
import { fetchCurrentUserAction, storeCurrentUserAction } from "../controllers/user-controller.js";

const auth = new Router();

auth.use(errorHandlingMiddleware());
auth.use(knexTransactionMiddleware());

auth.post("/users/create", storeCurrentUserAction);
auth.get("/users/:id", fetchCurrentUserAction)

export default auth;
