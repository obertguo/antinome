
//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
var oneLinerJoke = require('one-liner-joke');
//End Packages

//Start class
class OnelinerCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'oneliner' ,
                group: 'oneliner' ,
                memberName: 'oneliner' ,
                description: 'Random One Liners' 
            });
        }
    
//End class

//Start async

async run (message, args){
    //insult = yoMamma(); 

    //var getRandomJoke = oneLinerJoke.getRandomJoke();
    console.log(oneLinerJoke.getRandomJoke());

  //  var x = oneLinerJoke.getRandomJoke().map(getRandomJoke => getRandomJoke.body);

  //  const replyembed = new Discord.RichEmbed()
  //  .setTitle('Random One Liner Jokes' )
  ////  .setDescription(`${x}`)
  //  .setColor("#17e510");
  //  message.channel.send({
  //      embed : replyembed
 //   })
    }
}


//Final Line 
module.exports = OnelinerCommand;
//End Everything. The Pain is Over Yay. 