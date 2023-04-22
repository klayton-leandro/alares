import Koa from "koa";
import bodyparserCofigurer from "./configurers/bodyparser-configurer.js";
import corsConfigurer from "./configurers/cors-configurer.js";
import routes from "./routes/index.js";

import { PORT } from "../../services/utils/config.js";

const configurers = [
	corsConfigurer,
	bodyparserCofigurer,
];

export default async function () {
	const app = new Koa();

	for (const configurer of configurers) {
		await configurer(app);
	}

	app.use(routes.routes());
	app.use(routes.allowedMethods());
	app.listen(PORT);
}
