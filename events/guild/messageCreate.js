const { Client, Message } = require("discord.js");
const { prefix } = require("../../config/config.json");

module.exports = {
	name: "messageCreate",
	/**
	 *
	 * @param { Message } message
	 * @param { Client } client
	 */
	execute(message, client) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix + " ")) return;
		else message.content.toLowerCase(message.content);

		const args1 = message.content.split(" ")[2];
		const args2 = message.content.split(" ")[3];
		const commandName = message.content.split(" ")[1];
		const command = client.commands.get(commandName);

		if (!command) return;

		try {
			command.execute(message, args1, args2, commandName, client);
		} catch (error) {
			console.log(error);
		}
	},
};
