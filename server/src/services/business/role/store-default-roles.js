import { ADMIN, MASTER, CLIENT } from "./consts/roles.js";
import roles from "./tables/roles.js";

async function storeDefaultRoles(transaction) {
	const now = new Date();
	const createdAt = now;
	const updatedAt = now;

	return await roles(transaction).insert([
		{
			id: MASTER,
			name: "Mestre",
			description: "Papel mestre com acessos ilimitados.",
			enumerable: false,
			createdAt,
			updatedAt,
		},
		{
			id: ADMIN,
			name: "Administrador",
			description: "Papel de administrador com acessos ilimitados",
			enumerable: true,
			createdAt,
			updatedAt,
		},
        {
			id: CLIENT,
			name: "Cliente",
			description: "Papel do sistema com acessos limitados.",
			enumerable: true,
			createdAt,
			updatedAt,
		},
	]);
}

export default storeDefaultRoles;
