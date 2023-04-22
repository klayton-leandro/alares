import knex from "../../../services/database/knex/index.js";

function knexTransactionMiddleware() {
	return (ctx, next) => {
		//Prevent duplicate transactions
		if (typeof ctx?.state?.transaction != "undefined") return next();

		return knex.transaction(async (transaction) => {
			ctx.state.transaction = transaction;
			return next();
		});
	};
}

export default knexTransactionMiddleware;
