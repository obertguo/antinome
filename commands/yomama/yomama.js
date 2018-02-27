
//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const yoMamma = require('yo-mamma').default;
//End Packages

//Start class
class YomamaCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'yomama' ,
                group: 'yomama' ,
                memberName: 'yomama' ,
                description: 'Random Yo Mama Jokes' 
            });
        }
    
//End class

//Start async

async run (message, args){
    //insult = yoMamma(); 
    console.log(yoMamma());
    const replyembed = new Discord.RichEmbed()
    .setTitle('Random Yo-Mama Joke' )
    .setDescription(`${yoMamma()}`)
    .setColor("#17e510");
    message.channel.send({
        embed : replyembed
    })
    }
}


//Final Line 
module.exports = YomamaCommand;
//End Everything. The Pain is Over Yay. 