import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";

import purchase from "./tables/purchases.js";
import fetchPurchases from "./fetch-purchases.js";

const APPLICATION = 1;

async function storePurchase(currentUserId, data, transaction) {    

    if(!currentUserId) { 
        currentUserId = APPLICATION;
    }

    const PurchaseData = Object.assign(
        data,
        {userId: currentUserId},
		createdAt(),
		updatedAt()
	);

    await purchase(transaction).insert(PurchaseData)
    return await fetchPurchases(currentUserId, PurchaseData.userId, transaction);

}

export default storePurchase;
