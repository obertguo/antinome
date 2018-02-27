//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class CreatedCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'created' ,
                group: 'created' ,
                memberName: 'created' ,
                description: 'Displays When The User Account Was Created' 
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


    const CreatedAtembed = new Discord.RichEmbed()
    .setTitle(`${user.createdAt}`)
    .setThumbnail(`${user.avatarURL}`)
    .setAuthor(`${user.tag}` , ` ${user.avatarURL} `)
    .setColor("#17e510")
    .setTimestamp()
    //.setImage(user.avatarURL)
   // .setDescription(`${user.createdAt}`);

    message.channel.send({
        embed : CreatedAtembed
    })

    }
}


//Final Line 
module.exports = CreatedCommand;
//End Everything. The Pain is Over Yay. 