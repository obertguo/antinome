//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class PfpCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'pfp' ,
                group: 'pfp' ,
                memberName: 'pfp' ,
                description: 'Obtain Profile Picture From A Mentioned User.' 
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


    const profileembed = new Discord.RichEmbed()
    //.setTitle(`${user.tag}'s Profile Picture `)
    .setAuthor(`${user.tag}` , ` ${user.avatarURL} `)
    .setColor("#17e510")
   // .setTimestamp()
    .setThumbnail(user.avatarURL)
   // .setImage(user.avatarURL)
    .addField(`Link` , `${user.avatarURL}`);
   // .setDescription(user.avatarURL);

    message.channel.send({
        embed : profileembed
    })

    }
}


//Final Line 
module.exports = PfpCommand;
//End Everything. The Pain is Over Yay. 