const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pfp',
	execute(message, args, prefixCommandName, client) {
		const mention = args.split()[1];
		const userID = mention.slice(2, -1).toString();
		console.log(userID);
		const user = client.users.cache.fetch(userID); //|| message.author;
		console.log(user);

		const pfptarget = new MessageEmbed().setImage(
			`${user.displayAvatarURL({ format: 'png' })}`
		);

		message.channel.send({
			embeds: [pfptarget],
		});
	},
};
