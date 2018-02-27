//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class BallCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: '8ball' ,
                group: '8ball' ,
                memberName: '8ball' ,
                description: '8ball' 
            });
        }
    
//End class

//Start async

async run (message, args){
    var n = Math.floor((Math.random() * 20) + 1);

    var words = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Do not count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
    ];
    
        var getRandomWord = function () {
          return words[Math.floor(Math.random() * words.length)];
        };

        const inputembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .setColor("#ffff00")
        .setTimestamp()
        //.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .addField("Error Information" , `**Specify A Reason!**`);

        var input = message.content.split(" ").slice(1).join(" ");
        if (!input) return message.channel.send({
            embed : inputembed
        })

        var ballembed = new Discord.RichEmbed()
        //.setTitle(`${message.guild.name}`)
        .setAuthor(`${message.author.tag}` , `${message.author.avatarURL}`)
        .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/2000px-8-Ball_Pool.svg.png`)
        //.setAuthor(`Owner Of This Server | ${message.guild.owner}`)
        .setDescription(``)

        .addField(`${message.content.split(" ").slice(1).join(" ")}` , `${getRandomWord()}`)

        //.setFooter(``)
        .setColor("#17e510");



        message.channel.send({
            embed : ballembed
        });
    
    }
}


//Final Line 
module.exports = BallCommand;
//End Everything. The Pain is Over Yay. 