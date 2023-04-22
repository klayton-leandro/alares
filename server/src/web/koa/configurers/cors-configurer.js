import cors from "@koa/cors";

function corsConfigurer(app) {
	app.use(cors());
}

export default corsConfigurer;
