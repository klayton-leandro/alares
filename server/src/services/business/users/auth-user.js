import users from "./tables/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { KNEX_KEY_SECRET_DEV } from "../../../../src/services/utils/config.js"

async function authUser(currentUserId, data, transaction) {  
    
    const { email, password  } = data;

    const user = await users(transaction).where({ email }).first();

    if(!user) { 
        return { error: "E-mail ou senha incorretos"}
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if(!passwordMatches) { 
        return {error: "E-mail ou senha incorretos"}
    }

    const token = jwt.sign({ id: user.id, name: user.name }, KNEX_KEY_SECRET_DEV);      


    const userData = 
        Object.assign({name: user.name, phone: user.phone, roleId: user.roleId, refreshToken: token})

    return userData

}

export default authUser;
