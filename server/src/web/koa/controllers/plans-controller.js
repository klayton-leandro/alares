import storePlans from "../../../services/business/plans/store-plans.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */


export async function PlansCurrentStoreAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storePlans(user, data, transaction);
}