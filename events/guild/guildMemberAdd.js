const { MessageEmbed } = require("discord.js");
const { channels, defaultrole } = require("../../config/config.json");

module.exports = {
	name: "guildMemberAdd",
	execute(member) {
		const joins = channels.joins;

		const user = member.user;
		const userCreatedAt = Math.floor(user.createdTimestamp / 1000);
		const memberJoinedAt = Math.floor(member.joinedTimestamp / 1000);

		const welcome = new MessageEmbed()
			.setAuthor({
				name: `${member.user.username} joined the server!`,
				iconURL: `${member.user.displayAvatarURL()}`,
			})
			.setColor("BLURPLE")
			.setTimestamp();

		try {
			member.guild.channels.cache.get(joins).send({
				embeds: [welcome],
			});
			member.roles.add(defaultrole);
		} catch (error) {
			console.log(error);
		}
	},
};
