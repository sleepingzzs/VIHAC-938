const { MessageEmbed } = require('discord.js');
const { channels } = require('../../config/config.json');

module.exports = {
	name: 'guildMemberAdd',
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
			.setColor('BLURPLE')
			.setDescription(
				`• **Username:** ${user} - \`${user.tag}\`
				\n• **Created:** <t:${userCreatedAt}:f> (<t:${userCreatedAt}:R>)
				\n• **Joined:** <t:${memberJoinedAt}:f> (<t:${memberJoinedAt}:R>)`
			)
			.setImage(
				'https://media4.giphy.com/media/FdTZISdU7jsnnJy58I/giphy.gif?cid=790b761137e93c2916e118cfc70d008cc06e2f43ed7210a0&rid=giphy.gif&ct=g'
			)
			.setTimestamp();

		try {
			member.guild.channels.cache.get(joins).send({
				embeds: [welcome],
			});
		} catch (error) {
			console.log(error);
		}
	},
};
