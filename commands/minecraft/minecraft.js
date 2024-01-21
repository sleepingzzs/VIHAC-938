const { mcip } = require("../../config/config.json");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const { Buffer } = require("buffer");
module.exports = {
	name: "minecraft",
	async execute(message, args1, args2, commandName, client) {
		const ip =
			args1 === undefined
				? client.channels.cache.get(mcip).name.replace("IP: ", "")
				: args1;
		const res = await fetch(`https://api.mcsrvstat.us/3/${ip}`);
		const stats = await res.json();

		let online = "🔴 Offline",
			motd = "",
			playing = 0,
			max = 0,
			version = "0.0.0",
			color = "RED";
		icon = new MessageAttachment(
			"https://media.minecraftforum.net/attachments/300/619/636977108000120237.png",
			"default.png"
		);
		if (stats.online) {
			online = "🟢 Online";
			for (let i = 0; i < stats.motd.clean.length; i++) {
				motd = motd + "\n" + stats.motd.clean[i];
			}
			version = stats.version;
			playing = stats.players.online;
			max = stats.players.max;
			color = "GREEN";
			icon = stats.icon.split(",")[1];
			icon = new Buffer.from(icon, "base64");
			icon = new MessageAttachment(icon, "server-icon.png");
		}
		const status = new MessageEmbed()
			.setThumbnail(
				icon === ""
					? "attachment://default.png"
					: `attachment://${icon.name}`
			)
			.setTimestamp()
			.setAuthor({
				name: "IP: " + ip,
			})
			.setDescription(motd)
			.addFields(
				{
					name: online,
					value: `Playing: ${playing}/${max}`,
					inline: true,
				},
				{ name: "\u200B", value: "\u200B", inline: true },
				{ name: "Version", value: version, inline: true }
			)
			.setColor(color);

		await message.channel.send({
			embeds: [status],
			files: [icon],
		});
	},
};
