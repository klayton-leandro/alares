import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import log from "../../../services/utils/debug/log.js";

function errorHandlingMiddleware() {
	return async (ctx, next) => {
		try {
			await next();
		} catch (error) {
			log.extend("error")(error);
			if (error instanceof Joi.ValidationError) {
				ctx.response.body = error.details;
				ctx.response.status = StatusCodes.UNPROCESSABLE_ENTITY;
			} else {
				throw error;
			}
		}
	};
}

export default errorHandlingMiddleware;
