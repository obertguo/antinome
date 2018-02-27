const commando = require('discord.js-commando');
const Discord = require("discord.js");

class DiceRollCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'roll' ,
            group: 'roll' ,
            memberName: 'roll' ,
            description: 'Rolls a die' 
        });
    }
    async run (message, args){


        var roll = Math.floor(Math.random() * 6) + 1;
        
        const inputembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .setColor("#ffff00")
        .setTimestamp()
        //.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .addField("Error Information" , `**Input A Number Between 1—6!**`);

        var input = message.content.split(" ").slice(1).join(" ");
        if (!input) return message.channel.send({
            embed : inputembed
        });

        

        if (isNaN(input)){
            message.channel.send({
                embed : inputembed
            })
        }


        else{

        
            if (input > 6){
                message.channel.send({
                    embed : inputembed
                })
            }   

            else {

                if (input < 1){
                    message.channel.send({
                        embed : inputembed
                    })
                }   
                else{
        const winembed = new Discord.RichEmbed()
        //.setTitle(`${message.guild.name}`)
        .setAuthor(`${message.author.tag}` , `${message.author.avatarURL}`)
        .setThumbnail(`https://openclipart.org/image/2400px/svg_to_png/190430/1391010041.png`)
        //.setAuthor(`Owner Of This Server | ${message.guild.owner}`)
        .addField(":medal: WINNER!:medal: " , `You rolled a ${roll}!`)
        //.setFooter(``)
        .setColor("#17e510");

        const loseembed = new Discord.RichEmbed()
        //.setTitle(`${message.guild.name}`)
        .setAuthor(`${message.author.tag}` , `${message.author.avatarURL}`)
        .setThumbnail(`https://openclipart.org/image/2400px/svg_to_png/190430/1391010041.png`)
        .addField(":cry: You've Lost! :cry: " , `You picked ${input} and rolled a ${roll}.`)
        //.setAuthor(`Owner Of This Server | ${message.guild.owner}`)
        //.setFooter(``)
        .setColor("#ff0000");


  

        if(input == roll){
            message.channel.send({
                embed : winembed
            })
        }
else{
    message.channel.send({
        embed : loseembed
    })
}

                }
    
    }
}
}
}

module.exports = DiceRollCommand;