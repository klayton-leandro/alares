import "dotenv/config";
import {
	KNEX_CLIENT,
	KNEX_FILENAME,
	KNEX_HOST,
	KNEX_PORT,
	KNEX_USER,
	KNEX_DATABASE,
	KNEX_PASSWORD,
	SQLITE3_DIALECT,
} from "./src/services/utils/config.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

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
		  };

export default {
	client,
	connection,
	useNullAsDefault,
	migrations: {
		disableMigrationsListValidation: true,
		directory: "./src/services/database/knex/migrations",
		stub: "./src/services/database/knex/stubs/migration.stub.js",
	},
	seeds: {
		directory: "./src/services/database/knex/seeds",
		stub: "./src/services/database/knex/stubs/seed.stub.js",
	},
};
