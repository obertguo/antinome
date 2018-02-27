//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Class Begin
class PurgeCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'purge' ,
            group: 'purge' ,
            memberName: 'purge' ,
            description: 'Purges Chat' 
        });
    }
//Class End

//Async Start
    async run (message, args){    
        

        //Let's try to make embed error message!
//ROLE REQUIRED MESSAGE
const roleembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
.addField("Error Information" , `**REQUIRES MANAGE_MESSAGES PERMISSION!**`);
//End ROLE REQUIRED MESSAGE

//Login V2 | For Server Owner / People with Kick Members Perms.
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send({
   embed : roleembed
})

        //Error! Input a # for # of msgs to purge.
        const reasonembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .setColor("#ffff00")
        .setTimestamp()
        //.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        //.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .addField("Error Information" , `**Input A Number From 2—100!**`)
        .addField(":warning: IMPORTANT! :warning:" ,  "**Any Number Other Than 2—100 Will Terminate The Command!**");
    
        //End Reason Error Message
        //End Error messages
        
          
       //Input a Number for # of messages to purge
        let reason = message.content.split(" ").slice(1).join(" ");

        if(!reason) return message.channel.send ({
            embed : reasonembed
         });

        if(reason < 2) return message.channel.send ({
            embed : reasonembed
        });
        if(reason > 100) return message.channel.send ({
            embed : reasonembed
        });
        //Actual Purging!
        message.channel.bulkDelete(reason);
    }
}
//}
//Async End and Class and stuff like that. 

//Exports Begin
module.exports = PurgeCommand;
//Exports End and Code ends!