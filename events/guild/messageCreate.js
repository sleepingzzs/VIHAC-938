const { Client, Message } = require("discord.js");
const { prefix } = require("../../config/config.json");

module.exports = {
	name: "messageCreate",
	execute(message, client) {
		const msg = message.content.toLowerCase();
		if (message.author.bot) return;
		if (!msg.toLowerCase().startsWith(prefix + " ")) return;

		const args1 = msg.split(" ")[2];
		const args2 = msg.split(" ")[3];
		const commandName = msg.split(" ")[1];
		const command = client.commands.get(commandName);

		if (!command) return;

		try {
			command.execute(message, args1, args2, commandName, client);
		} catch (error) {
			console.log(error);
		}
	},
};
