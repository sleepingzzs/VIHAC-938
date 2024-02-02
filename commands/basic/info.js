const { MessageEmbed, MessageMentions } = require("discord.js");
module.exports = {
	name: "info",

	async execute(message, args1) {
		const user =
			args1 !== undefined && args1.match(MessageMentions.USERS_PATTERN)
				? message.guild.members.cache.get(
						args1.substring(2, args1.length - 1)
				  )
				: message.author;

		const member = message.member;

		const iconURL = user.avatarURL({ dynamic: true });

		const registered_ts = user.createdTimestamp;
		const registered_exact = new Date(registered_ts).toLocaleTimeString(
			"en-US",
			{
				timeZone: "UTC",
				weekday: "short",
				month: "short",
				hour12: true,
				hour: "numeric",
				minute: "numeric",
				day: "numeric",
				year: "numeric",
			}
		);

		const joined_ts = member.joinedTimestamp;
		const joined_exact = new Date(joined_ts).toLocaleTimeString("en-US", {
			timeZone: "UTC",
			weekday: "short",
			month: "short",
			hour12: true,
			hour: "numeric",
			minute: "numeric",
			day: "numeric",
			year: "numeric",
		});

		const userinfo = new MessageEmbed()
			.setAuthor({
				name: `${user.username}`,
				iconURL: iconURL,
			})
			.setColor("BLURPLE")
			.setDescription(`${member}`)
			.setThumbnail(iconURL)
			.addField("Registered", `${registered_exact} (UTC)`, false)
			.addField("Joined", `${joined_exact} (UTC)`, false)
			.addField(
				`Roles [${member.roles.cache.size - 1}]`,
				`${member.roles.cache
					.map((r) => r)
					.join(" ")
					.replace("@everyone", "")}`,
				false
			)
			.setFooter({
				text: `ID: ${user.id}`,
			})
			.setTimestamp();

		await message.channel.send({ embeds: [userinfo] });
	},
};
