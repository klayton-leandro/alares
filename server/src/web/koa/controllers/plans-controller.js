import fetchAllPlans from "../../../services/business/plans/fetch-all-plans.js";
import fetchPlansAll from "../../../services/business/plans/fetch-plans-all.js";
import fetchPlans from "../../../services/business/plans/fetch-plans.js";
import fetchWebPlans from "../../../services/business/plans/fetch-web-all-plans.js";
import storePlans from "../../../services/business/plans/store-plans.js";
import trashPlans from "../../../services/business/plans/trash-plans.js";
import updatePlan from "../../../services/business/plans/update-plan.js";

/**
 * @param {import("koa").Context} ctx The context;
 * @returns { Promise<void> }
 */


export async function PlansCurrentStoreAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await storePlans(user?.id, data, transaction);
}

export async function PlansUsersCurrentStoreAction(ctx) {
	const { transaction, user } = ctx.state;
	const filters = ctx.request.query;
	ctx.response.body = await fetchAllPlans(user?.id, filters, transaction);
}

export async function PlansAllCurrentAction(ctx){ 
	const { transaction, user } = ctx.state;
	ctx.response.body = await fetchPlansAll(user?.id, transaction)
}
export async function PlansCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const { id } = ctx.request.params
	ctx.response.body = await fetchPlans(user?.id, id, transaction);
}

export async function PlansTrashCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const { id } = ctx.request.params
	ctx.response.body = await trashPlans(user?.id, id, transaction);
}

export async function updatePlansCurrentAction(ctx) {
	const { transaction, user } = ctx.state;
	const data = Object.assign(ctx.request.body);
	ctx.response.body = await updatePlan(user?.id, data, transaction);
}


export async function PlansWebCurrentAction(ctx) {
	const { transaction } = ctx.state;
	ctx.response.body = await fetchWebPlans(transaction);
}

