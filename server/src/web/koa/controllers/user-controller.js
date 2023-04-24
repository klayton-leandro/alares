import authUser from "../../../services/business/users/auth-user.js";
import fetchUser from "../../../services/business/users/fetch-user.js";
import fetchUsers from "../../../services/business/users/fetch-users.js";
import storeUser from "../../../services/business/users/store-user.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */

export async function fetchCurrentUserAction(ctx) {
	const { transaction, user } = ctx.state;
	const userId = ctx.request.params
	ctx.response.body = await fetchUser(user?.id, transaction);
}

export async function fetchUsersCurrentUserAction(ctx) {
	const { transaction, user } = ctx.state;
	const filters = ctx.request.query;
	ctx.response.body = await fetchUsers(user?.id, filters, transaction);
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