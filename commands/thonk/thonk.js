//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class ThonkCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'thonk' ,
                group: 'thonk' ,
                memberName: 'thonk' ,
                description: ':thonk:' 
            });
        }
    
//End class

//Start async

async run (message, args){

        const thonkembed = new Discord.RichEmbed()
        //.setTitle(`:Kappa:`)
        .setAuthor(":Thonk:" , "https://i.rbt.asia/g/image/1496/77/1496773854959.png")
        .setColor("#eef442")
        //.setTimestamp()
        //.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.addField("Kick Information" , `**Kicked User |** ${user}\n**Moderator |** ${message.author}\n**Reason |** ${reason}`);
        message.channel.send({
            embed : thonkembed
        });
        message.channel.bulkDelete(2);
        message.channel.send({
            embed : thonkembed
        });
    }
}


//Final Line 
module.exports = ThonkCommand;
//End Everything. The Pain is Over Yay. 