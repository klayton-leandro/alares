import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";
import fetchPlans from "./fetch-plans.js";
import plans from "./tables/plans.js";

async function storePlans(currentUserId, data, transaction) {

    const PlansData = Object.assign(
        data,
		createdAt(),
		updatedAt()
	);

    await plans(transaction).insert(PlansData)
    return await fetchPlans(currentUserId, PlansData.userId, transaction);

}

export default storePlans;
