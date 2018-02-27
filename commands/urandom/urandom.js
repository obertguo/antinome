
//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const ud = require("urban-dictionary");
//End Packages

//Start class
class UrandomCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'urandom' ,
                group: 'urandom' ,
                memberName: 'urandom' ,
                description: 'Random Words From Urban Dictionary' 
            });
        }
    
//End class

//Start async

async run (message, args){


  ud.random(function (error, entry) {
    if (error) {
        const errorembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor(`${message.author}` , `${message.author.avatarURL}`)
        .setColor("#ffff00")
        .setTimestamp()
        .addField("Error Information" , `**Unknown Error!**`)
      console.error(error.message)
      message.channel.send({
          embed : errorembed
      });
    } else {

       
    console.log(entry.word)
    console.log(entry.definition)
    console.log(entry.example)

        var urbanembed = new Discord.RichEmbed()
        .setAuthor(`Definition of ${entry.word}, by ${entry.author}.`)
        .setDescription(`Link | ${entry.permalink}`)
        .addField(`${entry.definition}` , `${entry.example}`)
        .addField(":thumbsup:" , `Thumbs Up: ${entry.thumbs_up}` , true)
        .addField(":thumbsdown:" , `Thumbs Down: ${entry.thumbs_down}` , true)
        .setColor("#17e510")
        .setTimestamp();

        message.channel.send({
            embed : urbanembed
        });
      console.log(entry.word)
      console.log(entry.definition)
      console.log(entry.example)
    }

    

  })
  
    }
}


//Final Line 
module.exports = UrandomCommand;
//End Everything. The Pain is Over Yay. 