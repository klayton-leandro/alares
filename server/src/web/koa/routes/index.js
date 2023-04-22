import Router from "@koa/router";
import auth from "./auth.js";
import web from "./web.js";

const routes = new Router();

routes.use(web.routes());
routes.use(auth.allowedMethods());

routes.use(auth.routes());
routes.use(auth.allowedMethods());

export default routes;
