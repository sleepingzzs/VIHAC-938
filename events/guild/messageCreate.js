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
		const query = msg.replace(prefix + " " + commandName, "").trim();
		if (!command) return;
		if (!message.member.permissions.has("ADMINISTRATOR") && command.admin)
			return;

		try {
			command.execute(message, args1, args2, commandName, client, query);
		} catch (error) {
			console.log(error);
		}
	},
};
