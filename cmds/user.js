const Discord = require('discord.js');
module.exports = {
    name: 'user',
    description: "Display user info.",
    execute(message, args) {
        const member = message.mentions.members.first();

        if(member){
            const memberEmbed = new Discord.RichEmbed()
            .setAuthor(`${member.user.tag}, ${member.user.id}`, member.user.avatarURL)
            .setDescription(`
            **Joined Guild:** ${member.joinedAt}\n
            **Bot:** ${member.user.bot}\n
            **Roles:** ${String(member.roles.map(res => res)).split(',').join('')}\n
            `)
            .setFooter(`Account created on ${member.user.createdAt}`)
            .setColor("#36393E");

            message.channel.send({embed: memberEmbed});

        } else{

            const authorEmbed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}, ${message.author.id}`, message.author.avatarURL)
            .setDescription(`
            **Joined Guild:** ${message.guild.members.find(res => res.id === message.author.id).joinedAt}\n
            **Bot:** ${message.author.bot}\n
            **Roles:** ${message.guild.members.find(res => res.id === message.author.id).roles.map(res => res)}\n
            `)
            .setFooter(`Account created on ${message.author.createdAt}`)
            .setColor("#36393E");

            message.channel.send({embed: authorEmbed});

        }
    }
}