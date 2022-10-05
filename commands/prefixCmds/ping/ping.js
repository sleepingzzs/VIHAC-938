module.exports = {
	name: 'ping',
	async execute(message, args, prefixCommandName, client) {
		const msg = await message.channel.send({
			content: ':ping_pong: pong! 000ms',
			fetchReply: true,
		});
		msg.edit({
			content: `:ping_pong: pong! ${
				msg.createdTimestamp - message.createdTimestamp
			}ms`,
		});
	},
};
