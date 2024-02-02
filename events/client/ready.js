module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		console.log("Bot: ✔");
		client.user.setPresence({
			activities: [
				{
					name: "my homo slaves <3",
					type: "WATCHING",
				},
			],
			status: "dnd",
		});
	},
};
