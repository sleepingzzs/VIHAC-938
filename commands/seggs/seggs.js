module.exports = {
	name: "seggs",
	async execute(message, args1, args2, commandName, client) {
		if (args1 !== undefined && args2 !== undefined) {
			await message.channel.send({
				content: `${args2} gets bruttaly seggs'd by ${args1}!`,
			});
		} else if (args1 !== undefined && args2 === undefined) {
			await message.channel.send({
				content: `${args1} gets bruttaly seggs'd by <@${message.author.id}>!`,
			});
		} else {
			await message.channel.send({
				content: `<@${message.author.id}> seggses themself after not finding a mate :pensive:`,
			});
		}
	},
};
