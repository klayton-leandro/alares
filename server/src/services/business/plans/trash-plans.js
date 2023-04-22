import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";
import plans from "./tables/plans.js";

async function trashPlans(currentUserId, id, transaction) {
    await plans(transaction)
    .where('id', id)
    .whereNull("deletedAt")
    .update({
        ...updatedAt(),
        ...deletedAt()
    })
}

export default trashPlans;
