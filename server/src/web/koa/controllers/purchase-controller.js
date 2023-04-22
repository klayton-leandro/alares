import storePurchase from "../../../services/business/purchases/store-purchases.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */


export async function PurchaseStoreCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storePurchase(user, data, transaction);
}