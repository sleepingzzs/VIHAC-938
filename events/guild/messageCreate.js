const { Client, Message } = require('discord.js');
const { prefix } = require('../../config/config.json');
const { admins } = require('../../config/botAdmins.json');
const admins_ = [admins.bizi, admins.rStranger, admins.rawrrr];

module.exports = {
	name: 'messageCreate',
	/**
	 *
	 * @param { Message } message
	 * @param { Client } client
	 */
	execute(message, client) {
		if (message.author.bot) return;
		if (!admins_.includes(message.author.id)) return;
		if (!message.content.startsWith(prefix)) return;
		else message.content.toLowerCase(message.content);

		const args = message.content.slice(prefix.length).trim();
		const prefixCommandName = args.split()[0];
		const prefixCommand = client.prefixCommands.get(prefixCommandName);

		if (!prefixCommand) return;

		try {
			prefixCommand.execute(message, args, prefixCommandName, client);
		} catch (error) {
			console.log(error);
		}
	},
};
