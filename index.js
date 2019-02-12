const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix , token} = require('./config.json');
const fs = require('fs');
client.cmds = new Discord.Collection();

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`);
    client.channels.find(res => res.id === '418108021160280095').send(`Logged in as ${client.user.tag}`);
});

const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    client.cmds.set(command.name, command);
}

client.on('message' , message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.cmds.has(command)) return;

    try {
    client.cmds.get(command).execute(message, args);
    }
    catch (error) {
        console.log('[ERROR]'.red);
        console.error(`${error}`.yellow);
        message.channel.send(`:warning: __**\`Command Execution Failed.\`**__\n\`\`\`js\n${error}\`\`\``);

    }
});

client.login(token);
