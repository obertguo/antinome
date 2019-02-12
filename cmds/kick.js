const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: "Kick users.",
    execute(message, args) {

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have `KICK_MEMBERS` permission.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });

        const user = message.mentions.members.first();
        const reason = String(args).split(',').slice(1).join(' '); 
        if(!user) return message.channel.send('Specify the guild member to kick.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });
        if(reason.length === 0) return message.channel.send('Specify the reason for kick.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });

        const kickEmbed = new Discord.RichEmbed()
         .setDescription(`🔨 Kicked <@${user.id}> for **\`${reason}\`**.`)
         .setAuthor(`Moderator: ${message.author.username}` , `${message.author.avatarURL}`)
         .setTimestamp()
         .setColor("#ff0000");

         const dmEmbed = new Discord.RichEmbed()
             .setDescription(`You are kicked from **\`${message.guild.name}\`** for **\`${reason}\`**`)
             .setAuthor(`Moderator: ${message.author.username}` , `${message.author.avatarURL}`)
             .setTimestamp()
             .setColor("#ff0000");

        user.kick().then((user) =>{
            message.channel.send({embed: kickEmbed});
            user.createDM().then(()=>(user.send({embed : dmEmbed})));
        }).catch(() =>{
            message.channel.send('Unable to kick user.');
        });
    }
}