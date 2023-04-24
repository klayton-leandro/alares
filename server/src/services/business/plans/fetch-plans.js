import plans from "./tables/plans.js";

async function fetchPlans(currentUserId, planId, transaction) {
    
    
    const purchase = await plans(transaction)	
		.where("id", planId)
		.where("userId", currentUserId)
		.whereNull("deletedAt")
		.first();

	return Object.assign(purchase);
}

export default fetchPlans;
