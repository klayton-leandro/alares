import authUser from "../../../services/business/users/auth-user.js";
import fetchUser from "../../../services/business/users/fetch-user.js";
import storeUser from "../../../services/business/users/store-user.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */

export async function fetchCurrentUserAction(ctx) {
	const { transaction, user } = ctx.state;
	const userId = ctx.request.params
	ctx.response.body = await fetchUser(user, userId, transaction);
}

export async function storeCurrentUserAction(ctx) {
	const { transaction } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storeUser(null, data, transaction);
}

export async function AuthCurrentUserAction(ctx) {
	const { transaction } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await authUser(null, data, transaction);
}