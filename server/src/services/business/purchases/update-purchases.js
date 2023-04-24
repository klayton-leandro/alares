import updatedAt from "../utils/assign/updated-at.js";
import purchases from "./tables/purchases.js";

async function updatePurchases(currentUserId, data, transaction) {
    const { id, statusPurchase } = data;

    await purchases(transaction)
    .where("userId", currentUserId)
    .where('id', id)
    .whereNull("deletedAt")
    .update({
        statusPurchase,
        ...updatedAt(),
    })
}

export default updatePurchases;
