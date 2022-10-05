module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('Bot: ✔');
		client.user.setPresence({
			activities: [
				{
					name: 'you!',
					type: 'WATCHING',
				},
			],
			status: 'dnd',
		});
	},
};
