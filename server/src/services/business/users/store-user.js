import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";

import bcrypt from "bcryptjs"
import users from "./tables/users.js";
import fetchUser from "./fetch-user.js";

async function storeUser(currentUserId, data, transaction) {

    const { password, ...rest } = data;
    const hash = await bcrypt.hash(password, 10);


    const userData = Object.assign(
        rest,
		{ password: hash },
		createdAt(),
		updatedAt()
	);


    const [userId] = await users(transaction).insert(userData)

    return await fetchUser(currentUserId, userId, transaction);

}

export default storeUser;
