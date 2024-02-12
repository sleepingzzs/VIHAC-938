const { MessageEmbed, MessageMentions } = require("discord.js");

module.exports = {
	name: "pfp",
	async execute(message, args1) {
		const user =
			args1 !== undefined && args1.match(MessageMentions.USERS_PATTERN)
				? message.guild.members.cache.get(
						args1.substring(2, args1.length - 1)
				  )
				: message.author;
		const author =
			message.member.nickname === undefined
				? message.author.displayName
				: message.member.nickname;
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
