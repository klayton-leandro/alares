import updatedAt from "../utils/assign/updated-at.js";
import deletedAt from "../utils/assign/deleted-at.js";
import users from "./tables/users.js";


async function trashUser(
    currentUserId,
	id,
	transaction
){
    await users(transaction)
        .where('id', id)
        .whereNull("deletedAt")
        .update({
            ...updatedAt(),
            ...deletedAt()
        })
}

export default trashUser