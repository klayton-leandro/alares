import plans from "./tables/plans.js";

async function fetchWebPlans(transaction) {

	const query = plans(transaction)
        .join("users", "users.id", "=", "plans.userId")
        .select(
            'plans.id',
            'plans.name as name',
        )
		.distinct()
		.whereNull("plans.deletedAt")
		.orderBy('plans.name')

	return  query
}

export default fetchWebPlans;
