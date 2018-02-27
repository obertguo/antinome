
//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class YtCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'yt' ,
                group: 'yt' ,
                memberName: 'yt' ,
                description: 'Search Stuff On Youtube' 
            });
        }
    
//End class

//Start async

async run (message, args){
message.reply(`In Progress!`);
    }
}


//Final Line 
module.exports = YtCommand;
//End Everything. The Pain is Over Yay. 