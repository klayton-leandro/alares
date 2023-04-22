import bodyparser from "koa-bodyparser";

function bodyparserCofigurer(app) {
	app.use(bodyparser());
}

export default bodyparserCofigurer;
