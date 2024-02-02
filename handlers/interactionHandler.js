const fs = require("fs");

module.exports = (client) => {
	const interactionFolders = fs.readdirSync("./interactions");

	for (const folder of interactionFolders) {
		const interactionFolders = fs
			.readdirSync(`./interactions/${folder}`)
			.filter((file) => file.endsWith(".js"));

		for (const file of interactionFolders) {
			const interaction = require(`../interactions/${folder}/${file}`);

			client.interactions.set(interaction.name, interaction);
		}
	}
};
