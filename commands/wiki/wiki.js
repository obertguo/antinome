//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class WikiCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'wiki' ,
                group: 'wiki' ,
                memberName: 'wiki' ,
                description: 'Search Stuff On Wikipedia' 
            });
        }
    
//End class

//Start async

async run (message, args){
    var https = "https://en.wikipedia.org/wiki/";
    var input = message.content.split(" ").slice(1).join(" ");
    var link = https + input;

    message.channel.send(link);


}
}


//Final Line 
module.exports = WikiCommand;
//End Everything. The Pain is Over Yay. 