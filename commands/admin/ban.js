const { MessageMentions } = require("discord.js");

module.exports = {
	name: "ban",
	admin: true,
	async execute(message, args, args2, cname, client) {
		const user = await message.mentions.members.first();
		try {
			await user.roles.remove();
		} catch (err) {}
	},
};
