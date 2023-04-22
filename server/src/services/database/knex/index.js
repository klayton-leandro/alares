import _knex from "knex";

import {
	KNEX_PASSWORD,
	KNEX_CLIENT,
	KNEX_FILENAME,
	KNEX_HOST,
	KNEX_PORT,
	KNEX_USER,
	KNEX_DATABASE,
	SQLITE3_DIALECT,
} from "../../utils/config.js";

const client = KNEX_CLIENT;
const useNullAsDefault = client == SQLITE3_DIALECT;
const connection =
	client == SQLITE3_DIALECT
		? {
				filename: KNEX_FILENAME,
		  }
		: {
				host: KNEX_HOST,
				port: KNEX_PORT,
				user: KNEX_USER,
				database: KNEX_DATABASE,
				password: KNEX_PASSWORD,
				ssl: { rejectUnauthorized: false }
		  };

const knex = _knex({
	client,
	connection,
	useNullAsDefault,
});

export default knex;
