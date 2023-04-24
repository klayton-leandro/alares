import deletedAt from "../utils/assign/deleted-at.js";
import updatedAt from "../utils/assign/updated-at.js";
import plans from "./tables/plans.js";

async function updatePlan(currentUserId, data, transaction) {
    const { id, name } = data;
    await plans(transaction)
    .where("userId", currentUserId)
    .where('id', id)
    .whereNull("deletedAt")
    .update({
        name,
        ...updatedAt(),
    })
}

export default updatePlan;
