//Begin packages
const Discord = require("discord.js");
const ms = require("ms");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const bot = new commando.Client()
//End Packages

//Start class
class InfoCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'info' ,
                group: 'info' ,
                memberName: 'info' ,
                description: 'Information About Antinome' 
            });
        }
    
//End class

//Start async

async run (message, args){

    //message.reply(`${message.author.avatarURL}`);
    var uptime = ms(ms(process.uptime() + "s") , {long: true});

    const infoembed = new Discord.RichEmbed()
    .setTitle(`About Antinome.`)
    .setAuthor(`Owner | @226457061959925761 | #5116` , `https://cdn.discordapp.com/avatars/226457061959925761/1304c66df23a61e7966f44ee2d583302.png?size=2048`)
    .setColor("#17e510")
    .setTimestamp()
    .setFooter(`Bot Uptime [${uptime}]`)
    .setDescription("Antinome is a DJS (Commando) Bot.")
    .addField("Antinome was created on `September 30th, 2017.`" , "It was developed by <@226457061959925761> | #5116")
    .setThumbnail("https://cdn.discordapp.com/avatars/226457061959925761/1304c66df23a61e7966f44ee2d583302.png?size=2048")
    .addBlankField(true)
    .addField(`Invite Antinome To Your Server!` , `https://discordapp.com/oauth2/authorize?client_id=363657330878840833&scope=bot&permissions=2146958591`)
    .addField(`Antinome's Official Server!` , `https://discord.gg/z5jyrKz`);
    //message.reply(message.author.avatarURL);
    message.channel.send({
        embed : infoembed
    })
    }
}


//Final Line 
module.exports = InfoCommand;
//End Everything. The Pain is Over Yay. 