import plans from "./tables/plans.js";

async function fetchAllPlans(currentUserId, filters, transaction) {

	const query = plans(transaction)
        .join('roles', 'roles.id', 'users.roleId')
        .join('users', 'users.id', 'users.id')
        .select(
            'plans.id',
            'plans.name',
            'users.name as username',
            'users.email as email', 
            'roles.name as role', 
        )
		// .whereNot('users.id', currentUserId)
		.whereNull("plans.deletedAt")
		.orderBy('plans.name');
	
	if(filters?.name){
		query.whereRaw('LOWER(plans.name) LIKE ?', '%'+filters?.name.toLowerCase()+'%')
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

export default fetchAllPlans;
