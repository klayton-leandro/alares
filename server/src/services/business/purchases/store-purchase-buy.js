import createdAt from "../utils/assign/created-at.js";
import updatedAt from "../utils/assign/updated-at.js";

import purchase from "./tables/purchases.js";
import users from "./tables/users.js";
import bcrypt from "bcryptjs"
import fetchPurchases from "./fetch-purchases.js";
import { CLIENT } from "../role/consts/roles.js";

const APPLICATION = 1;

async function storePurchaseBuy(currentUserId, data, transaction) {    

    const {password, ...rest} = data;

    if(!currentUserId) { 
        currentUserId = APPLICATION;
    }   

    const hash = await bcrypt.hash(password, 10);

    const [userId] = await users(transaction).insert({
        name: rest.name,
        email: rest.email,
        password: hash,
        phone: rest.phone,
        roleId: CLIENT
    })

    const PurchaseBuy = Object.assign(
        {   
            name: rest.name,
            price: rest.price,
            plansId: rest.plansId,
            userId: userId
        },
		createdAt(),
		updatedAt()
	);

    const [purchaseID] = await purchase(transaction).insert(PurchaseBuy)
    return await fetchPurchases(currentUserId, purchaseID, transaction);

}

export default storePurchaseBuy;
