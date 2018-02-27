//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class KappaCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'kappa' ,
                group: 'kappa' ,
                memberName: 'kappa' ,
                description: ':kappa:' 
            });
        }
    
//End class

//Start async

async run (message, args){

        const kappaembed = new Discord.RichEmbed()
        //.setTitle(`:Kappa:`)
        .setAuthor(":Kappa:" , "https://vignette.wikia.nocookie.net/kancolle/images/8/81/Kappa.png/revision/latest?cb=20160111205813")
        .setColor("#ffffff")
        //.setTimestamp()
        //.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.addField("Kick Information" , `**Kicked User |** ${user}\n**Moderator |** ${message.author}\n**Reason |** ${reason}`);
        message.channel.send({
            embed : kappaembed
        });
        message.channel.bulkDelete(2);
        message.channel.send({
            embed : kappaembed
        });
    }
}


//Final Line 
module.exports = KappaCommand;
//End Everything. The Pain is Over Yay. 