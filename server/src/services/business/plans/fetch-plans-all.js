import plansTable from "./tables/plans.js";

async function fetchPlansAll(currentUserId, transaction) {  
	
	const plansAll = await plansTable(transaction)
		.whereNull("deletedAt");

	return Object.assign(plansAll);
}

export default fetchPlansAll;
