//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class LastmessageCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'lastmessage' ,
                group: 'lastmessage' ,
                memberName: 'lastmessage' ,
                description: 'Last Message Of Specified User' 
            });
        }
    
//End class

//Start async

async run (message, args){

    const mentionembed = new Discord.RichEmbed()
    .setTitle(` :x: Error! `)
    .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
    .setColor("#ffff00")
    .setTimestamp()
    .addField("Error Information" , `**Mention / Ping A User!**`);

    let user = message.mentions.users.first()
    if(!user) return message.channel.send ({
        embed : mentionembed
    });


    const lastembed = new Discord.RichEmbed()
    .setTitle(`${user.tag}'s Last Message `)
    .setAuthor(`${user.username}` , ` ${user.avatarURL} `)
    .setColor("#17e510")
    .setTimestamp()
    //.setImage(user.avatarURL)
    .setDescription(user.lastMessage);

    message.channel.send({
        embed : lastembed
    })

    }
}


//Final Line 
module.exports = LastmessageCommand;
//End Everything. The Pain is Over Yay. 