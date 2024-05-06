const { MessageEmbed } = require("discord.js");
const { channels, memberRole, botRole } = require("../../config/config.json");

module.exports = {
	name: "guildMemberAdd",
	async execute(member) {
		const joins = channels.joins;
		const user = member.user;

		const welcome = new MessageEmbed()
			.setAuthor({
				name: `${user.username} joined the server!`,
				iconURL: `${user.displayAvatarURL()}`,
			})
			.setColor("BLURPLE")
			.setTimestamp()
			.setFooter({
				text: `ID: ${user.id}`,
			});
		try {
			if (!member.user.bot) {
				await member.guild.channels.cache.get(joins).send({
					embeds: [welcome],
				});
				let msg = await member.guild.channels.cache
					.get(joins)
					.send({ content: `${user}` });
				await msg.delete(1000);
				await member.roles.add(memberRole);
			} else member.roles.add(botRole);
		} catch (error) {
			console.log(error);
		}
	},
};
