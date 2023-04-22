import updatedAt from "../utils/assign/updated-at.js";
import deletedAt from "../utils/assign/deleted-at.js";
import purchases from "./tables/purchases.js";


async function trashPurchases(
    currentUserId,
	id,
	transaction
){
    await purchases(transaction)
        .where('id', id)
        .whereNull("deletedAt")
        .update({
            ...updatedAt(),
            ...deletedAt()
        })
}

export default trashPurchases