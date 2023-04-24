import users from "./tables/users.js";

async function fetchUsers(currentUserId, filters, transaction) {

	const query = users(transaction)
        .join('roles', 'roles.id', 'users.roleId')
        .select(
            'users.id',
            'users.name',
            'users.email',
            'users.phone',       
            'roles.name as role',
			'roles.id as roleId', 
        )
		// .whereNot('users.id', currentUserId)
		.whereNull("users.deletedAt")
		.orderBy('users.name');
	
	if(filters?.name){
		query.whereRaw('LOWER(users.name) LIKE ?', '%'+filters?.name.toLowerCase()+'%')
	}

	if(filters?.email){
		query.whereRaw('LOWER(users.email) LIKE ?', '%'+filters?.email.toLowerCase()+'%')
	}

	if(filters?.phone){
		query.whereRaw('LOWER(users.phone) LIKE ?', '%'+filters?.phone.toLowerCase()+'%')
	}  

	if(filters?.role){
		query.where('users.roleId', filters?.role)
	}

    if(filters?.limit){
        query.limit(filters.limit)
    }

    if(filters?.offset){
        query.offset(filters.offset)
    }

	if(filters?.limit || filters?.offset){
		const [{ total }] = await query
			.clone()
			.clear('limit')
			.clear('offset')
			.count({ total: '*' })
		
		return {
			total,
			data: await query
		}
	}

	return  query
}

export default fetchUsers;
