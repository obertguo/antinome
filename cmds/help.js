const Discord = require('discord.js');
const {prefix} = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Help page.',
    execute(message, args) {
        const {cmds} = message.client;

        var data = [];
        for(var i = 0; i < cmds.map(res => res).length; i++){
            data[i] = `${cmds.map(res => res.name)[i]}, ${cmds.map(res => res.description)[i]}`;
            data.push(data[i]);
        }

        var helpEmbed = new Discord.RichEmbed()
         .setAuthor(message.client.user.tag, message.client.user.avatarURL)
         .setFooter(`Prefix is ${prefix}`)
         .setColor('#ffbdbd');

        for(var i = 0; i < cmds.map(res => res).length; i++){
            helpEmbed.addField(cmds.map(res => res.name)[i] , cmds.map(res => res.description)[i]);
        }

        message.channel.send({embed : helpEmbed});
    }
}