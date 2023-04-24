import updatedAt from "../utils/assign/updated-at.js";
import purchases from "./tables/purchases.js";

async function updatePurchases(currentUserId, data, transaction) {
    const { id, statusPurchase, plansId } = data;

    const purchaseData = Object.assign({
        plansId,
        statusPurchase,
    })
    await purchases(transaction)
    .where("id", id)
    .whereNull("deletedAt")
    .update({
        ...purchaseData,
        ...updatedAt()
    })
}

export default updatePurchases;
