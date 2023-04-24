import purchaseTable from "./tables/purchases.js";

async function fetchPurchases(currentUserId, purchaseId, transaction) {  
	
	const purchase = await purchaseTable(transaction)
		.where("id", purchaseId)
		.where("userId", currentUserId)
		.whereNull("deletedAt")
		.first();

	return Object.assign(purchase ? purchase : []);
}

export default fetchPurchases;
