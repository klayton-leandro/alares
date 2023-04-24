import fetchAllPurchases from "../../../services/business/purchases/fetch-all-puchases.js";
import fetchPurchases from "../../../services/business/purchases/fetch-purchases.js";
import storePurchaseBuy from "../../../services/business/purchases/store-purchase-buy.js";
import storePurchase from "../../../services/business/purchases/store-purchases.js";
import trashPurchases from "../../../services/business/purchases/trash-purchases.js";
import updatePurchases from "../../../services/business/purchases/update-purchases.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */


export async function PurchaseStoreCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storePurchase(user?.id, data, transaction);
}

export async function PurchaseStoreBuyCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storePurchaseBuy(user?.id, data, transaction);
}

export async function fetchPurchasesCurrentUserAction(ctx) {
	const { transaction, user } = ctx.state;
	const filters = ctx.request.query;
	ctx.response.body = await fetchAllPurchases(user?.id, filters, transaction);
}

export async function updatePurchaseStatuses(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await updatePurchases(user?.id, data, transaction);
}


export async function PurchaseCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const { id } = ctx.request.params
	ctx.response.body = await fetchPurchases(user?.id, id, transaction);
}


export async function PurchaseTrashCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const { id } = ctx.request.params
	ctx.response.body = await trashPurchases(user?.id, id, transaction);
}