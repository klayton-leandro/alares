import { StatusCodes } from "http-status-codes";
import users from "../../../services/business/users/tables/users.js";
import ignoreExistenceViolation from "../utils/errors/ignore-existence-violation.js";
import jwt from "jsonwebtoken";	

const isNotToken = 'undefined'

function UserAuthenticationMiddleware() {
	return async (ctx, next) => {
		const { transaction } = ctx.state;
        let { authorization } = ctx.headers;
		authorization = String(authorization).replace('Bearer', '').trim(); 

		if(authorization === isNotToken) { 
			ctx.throw(StatusCodes.UNAUTHORIZED);
			return;
		}
       	
        const { id: userId } = jwt.decode(authorization);      
		const user = await users(transaction).where("id", userId)
        .first()
        .catch(ignoreExistenceViolation());
	

		ctx.state.user = user;

		return next();
	};
}

export default UserAuthenticationMiddleware;
