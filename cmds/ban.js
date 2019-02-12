const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: "Ban users.",
    execute(message, args) {

        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have `BAN_MEMBERS` permission.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });

        const user = message.mentions.members.first();
        const reason = String(args).split(',').slice(1).join(' '); 
        if(!user) return message.channel.send('Specify the guild member to ban.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });
        if(reason.length === 0) return message.channel.send('Specify the reason for ban.').then((sentMsg)=>{
            message.delete();
            sentMsg.delete(5000);
        });

        const banEmbed = new Discord.RichEmbed()
         .setDescription(`🔨 Banned <@${user.id}> for **\`${reason}\`**.`)
         .setAuthor(`Moderator: ${message.author.username}` , `${message.author.avatarURL}`)
         .setTimestamp()
         .setColor("#ff0000");

         const dmEmbed = new Discord.RichEmbed()
             .setDescription(`You are banned from **\`${message.guild.name}\`** for **\`${reason}\`**`)
             .setAuthor(`Moderator: ${message.author.username}` , `${message.author.avatarURL}`)
             .setTimestamp()
             .setColor("#ff0000");

        user.ban().then((user) =>{
            message.channel.send({embed: banEmbed});
            user.createDM().then(()=>(user.send({embed : dmEmbed})));
        }).catch(() =>{
            message.channel.send('Unable to ban user.');
        });
    }
}