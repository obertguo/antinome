//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class EmbedCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'embed' ,
                group: 'embed' ,
                memberName: 'embed' ,
                description: 'Embedded Text' 
            });
        }
    
//End class

//Start async

async run (message, args){

//Msg Error Message
const reasonembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
.addField("Error Information" , `**Input Text!**`);


    let message1 = message.content.split(" ").slice(1).join(" ");
    
    if(!message1) return message.channel.send ({
        embed : reasonembed
     })

    const replyembed = new Discord.RichEmbed()
     .setColor("ffff00")
     .setTimestamp()
     .setDescription(`${message1}`)
     .setTitle(` Embedded Text `)

     //Added a duplicate so that bulkDelete will delete user's msg properly and not the message before it.
     message.channel.send({
        embed : replyembed
     })

     //Purges user's msg when running embed command. Makes it look secretly cool!
     message.channel.bulkDelete(2);

     message.channel.send({
        embed : replyembed
     })
    }
}
//End Async and other stuff up top.

//Final Line 
module.exports = EmbedCommand;
//End Everything. The Pain is Over Yay. 