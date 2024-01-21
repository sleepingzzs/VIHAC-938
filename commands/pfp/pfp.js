const { MessageEmbed, MessageMentions } = require("discord.js");

module.exports = {
	name: "pfp",
	async execute(message, args1, args2, commandName, client) {
		console.log(typeof args);
		const user =
			args !== undefined && args.match(MessageMentions.USERS_PATTERN)
				? message.guild.members.cache.get(
						args.substring(2, args.length - 1)
				  )
				: message.author;
		// const user = message.author;
		const author =
			message.member.nickname === undefined
				? message.author.username
				: message.member.nickname;
		console.log(user);
		const pfptarget = new MessageEmbed()
			.setImage(`${user.displayAvatarURL({ format: "png", size: 256 })}`)
			.setTimestamp()
			.setAuthor({
				name: "Requested by " + author,
				iconURL: message.author.displayAvatarURL(),
			})
			.setDescription(`<@${user.id}>'s avatar`);

		message.channel.send({
			embeds: [pfptarget],
		});
	},
};
