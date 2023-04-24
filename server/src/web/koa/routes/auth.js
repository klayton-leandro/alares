import Router from "@koa/router";

import knexTransactionMiddleware from "../middlewares/knex-transaction-middleware.js";
import errorHandlingMiddleware from "../middlewares/error-handling-middleware.js";
import { 
    fetchCurrentUserAction, 
    fetchUsersCurrentUserAction, 
    storeCurrentUserAction 
} from "../controllers/user-controller.js";
import { 
    PurchaseCurrentAction,
    PurchaseStoreCurrentAction, 
    PurchaseTrashCurrentAction, 
    fetchPurchasesCurrentUserAction, 
    updatePurchaseStatuses
} from "../controllers/purchase-controller.js";
import { 
    PlansCurrentAction, 
    PlansCurrentStoreAction, 
    PlansTrashCurrentAction, 
    updatePlansCurrentAction, 
    PlansUsersCurrentStoreAction, 
    PlansAllCurrentAction
} from "../controllers/plans-controller.js";

import UserAuthenticationMiddleware from "../middlewares/auth-transaction-middleware.js";

const auth = new Router();

auth.use(errorHandlingMiddleware());
auth.use(knexTransactionMiddleware());
auth.use(UserAuthenticationMiddleware());

auth.get("/plans/all", PlansAllCurrentAction);
auth.get("/plans", PlansUsersCurrentStoreAction);
auth.get("/plans/:id", PlansCurrentAction);
auth.post("/plans/create", PlansCurrentStoreAction);
auth.delete('/plans/:id', PlansTrashCurrentAction);
auth.put('/plans', updatePlansCurrentAction);

auth.get("/users", fetchUsersCurrentUserAction);
auth.get("/users/me", fetchCurrentUserAction);
auth.get("/users/:id", fetchCurrentUserAction);
auth.post("/users/create", storeCurrentUserAction);

auth.get("/purchases", fetchPurchasesCurrentUserAction);
auth.put("/purchase", updatePurchaseStatuses);
auth.get("/purchases/:id", PurchaseCurrentAction);
auth.delete("/purchases/:id", PurchaseTrashCurrentAction);

export default auth;
