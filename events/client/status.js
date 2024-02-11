const { presence } = require("../../config/config.json");

module.exports = {
	name: "ready",
	execute(client) {
		client.user.setPresence({
			activities: [
				{
					name: presence.name,
					type: presence.type,
				},
			],
			status: presence.status,
		});
	},
};
