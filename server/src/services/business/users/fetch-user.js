import users from "./tables/users.js";

async function fetchUser(currentUserId, transaction) {  
	
	const user = await users(transaction)
		.join('roles', 'roles.id', 'users.roleId')
		.select(
			'users.*',
			'roles.name as role',
		)
		.where("users.id", currentUserId)
		.whereNull("users.deletedAt")
		.first();

	return Object.assign(user);
}

export default fetchUser;
