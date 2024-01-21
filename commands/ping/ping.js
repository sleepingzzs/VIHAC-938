module.exports = {
	name: "ping",
	async execute(message) {
		await message.channel.send({
			content: `:ping_pong: pong! ${
				Date.now() - message.createdTimestamp
			}ms`,
		});
	},
};
