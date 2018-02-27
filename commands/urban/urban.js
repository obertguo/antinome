
//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const urbanClient = require("urban-dictionary");
//End Packages

//Start class
class UrbanCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'urban' ,
                group: 'urban' ,
                memberName: 'urban' ,
                description: 'Search Stuff On Urban Dictionary' 
            });
        }
    
//End class

//Start async

async run (message, args){
  
var input = message.content.split(" ").slice(1).join(" ");
urbanClient.term(input, function (error, entries, tags, sounds, thumbs_down, thumbs_up, permalink, author){
  
  
    if (error) {

        
        const errorembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor(`${message.author}` , `${message.author.avatarURL}`)
        .setColor("#ffff00")
        .setTimestamp()
        .addField("Error Information" , `**${message.content.split(" ").slice(1).join(" ")} Is Not Found!**`)
      console.error(error.message)
      message.channel.send({
          embed : errorembed
      });


    } else {
        var urbanembed = new Discord.RichEmbed()
        .setAuthor(`Definition of ${entries[0].word}, by ${entries[0].author}.`)
        .setDescription(`Link | ${entries[0].permalink}`)
        .addField(`${entries[0].definition}` , `${entries[0].example}`)
        .addField(":thumbsup:" , `Thumbs Up: ${entries[0].thumbs_up}` , true)
        .addField(":thumbsdown:" , `Thumbs Down: ${entries[0].thumbs_down}` , true)
        .setColor("#17e510")
        .setTimestamp();

        message.channel.send({
            embed : urbanembed
        });
      console.log(entries[0].word)
      console.log(entries[0].definition)
      console.log(entries[0].example)
    }
  });



  //message.channel.send({
   //   embed : resultembed
  //})
    //var link = https + input;

  //  message.channel.send(link);
  
    }
}


//Final Line 
module.exports = UrbanCommand;
//End Everything. The Pain is Over Yay. 