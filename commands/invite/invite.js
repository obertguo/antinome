//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class InviteCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'invite' ,
                group: 'invite' ,
                memberName: 'invite' ,
                description: 'Antinome Invite Link' 
            });
        }
    
//End class

//Start async

async run (message, args){

    //message.reply(`${message.author.avatarURL}`);

    const inviteembed = new Discord.RichEmbed()
    .setTitle(` Antinome Invite Link `)
    .setAuthor(`Owner | @226457061959925761 | #5116` , `https://cdn.discordapp.com/avatars/226457061959925761/dcd48aa4af2c3ec28a57f36513b39dd8.png?size=2048`)
    .setColor("#17e510")
    .setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
    .setTimestamp()
    .setDescription(`https://discordapp.com/oauth2/authorize?client_id=363657330878840833&scope=bot&permissions=2146958591`);

    //message.reply(message.author.avatarURL);
    message.channel.send({
        embed : inviteembed
    })
    }
}


//Final Line 
module.exports = InviteCommand;
//End Everything. The Pain is Over Yay. 