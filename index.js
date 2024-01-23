require("dotenv").config();
const keepAlive = require("./keepAlive.js");
const fs = require("fs");
const { Client, Intents } = require("discord.js");
const client = new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
	],
});
const token = process.env.token;

const handlers = fs
	.readdirSync("./handlers")
	.filter((file) => file.endsWith(".js"));
handlers.forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(token);
