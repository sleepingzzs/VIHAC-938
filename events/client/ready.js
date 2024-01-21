module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		console.log("Bot: ✔");
		client.user.setPresence({
			activities: [
				{
					name: "bizi's enormous PP",
					type: "WATCHING",
				},
			],
			status: "dnd",
		});
	},
};
