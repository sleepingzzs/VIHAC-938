const { MessageEmbed } = require("discord.js");
const { channels, memberRole } = require("../../config/config.json");

module.exports = {
	name: "guildMemberAdd",
	execute(member) {
		const joins = channels.joins;
		const user = member.user;

		const welcome = new MessageEmbed()
			.setAuthor({
				name: `${user.username} joined the server!`,
				iconURL: `${user.displayAvatarURL()}`,
			})
			.setColor("BLURPLE")
			.setTimestamp();

		try {
			if (!member.user.bot) {
				member.guild.channels.cache.get(joins).send({
					embeds: [welcome],
				});
				member.roles.add(memberRole);
			} else member.roles.add(botRole);
		} catch (error) {
			console.log(error);
		}
	},
};
