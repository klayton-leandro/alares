import purchases from "./tables/purchases.js";

async function fetchAllPurchases(currentUserId, filters, transaction) {

	const query = purchases(transaction)
        .join("users", "purchase.userId", "=", "users.id")
        .join("plans", "purchase.plansId", "=", "plans.id")
        .select(
            'purchase.id',
            'purchase.price',
            'purchase.name as purchaseName',
			'purchase.statusPurchase as status',
            'plans.name as plansName',
            'users.name as name',       
        )
		.whereNull("purchase.deletedAt")
		.orderBy('purchase.name')
		.distinct();
	
	if(filters?.name){
		query.whereRaw('LOWER(purchase.name) LIKE ?', '%'+filters?.name.toLowerCase()+'%')
	}

	if(filters?.price){
		query.whereRaw('LOWER(purchase.price) LIKE ?', '%'+filters?.price.toLowerCase()+'%')
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

export default fetchAllPurchases;
