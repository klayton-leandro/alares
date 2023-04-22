import purchaseTable from "./tables/purchases.js";

async function fetchPurchases(currentUserId, userId, transaction) {  
	
	const purchase = await purchaseTable(transaction)
		.where("userId", userId)
		.whereNull("deletedAt")
		.first();

	return Object.assign(purchase);
}

export default fetchPurchases;
