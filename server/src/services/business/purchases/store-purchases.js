import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";

import purchase from "./tables/purchases.js";
import fetchPurchases from "./fetch-purchases.js";

async function storePurchase(currentUserId, data, transaction) {

    const PurchaseData = Object.assign(
        data,
		createdAt(),
		updatedAt()
	);

    await purchase(transaction).insert(PurchaseData)
    return await fetchPurchases(currentUserId, PurchaseData.userId, transaction);

}

export default storePurchase;
