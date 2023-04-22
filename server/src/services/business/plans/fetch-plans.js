import plans from "./tables/plans.js";

async function fetchPlans(currentUserId, userId, transaction) {
    
    
    const purchase = await plans(transaction)
		.where("userId", userId)
		.whereNull("deletedAt");

	return Object.assign(purchase);
}

export default fetchPlans;
