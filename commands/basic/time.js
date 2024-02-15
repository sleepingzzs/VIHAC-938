const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "time",
	async execute(message, args1, args2, commandName, client) {
		let timeZone = args1 === undefined ? "IST" : args1.toUpperCase();
		function getTime(tz) {
			return new Date(Date.now()).toLocaleTimeString("en-US", {
				timeZone: tz,
				hour12: true,
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			});
		}
		let time;

		try {
			time = getTime(timeZone);
		} catch (err) {
			time = getTime("IST");
		}
		const embed = new MessageEmbed()
			.setTitle(time + ` (${timeZone})`)
			.setColor("BLURPLE");
		await message.channel.send({
			embeds: [embed],
		});
	},
};
