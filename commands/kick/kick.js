//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Start class
class KickCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'kick' ,
                group: 'kick' ,
                memberName: 'kick' ,
                description: 'Kick Users' 
            });
        }
    
//End class

//Start async

async run (message, args){

//Let's try to make embed error message!
//ROLE REQUIRED MESSAGE
const roleembed = new Discord.RichEmbed()
.setTitle(`REQUIRES KICK_MEMBERS PERMISSION`)
.setColor("#ff0000");
//End ROLE REQUIRED MESSAGE

//Login V2 | For Server Owner / People with Kick Members Perms.
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send({
   embed : roleembed
})

//Login V1 | For Bot Owner / Me 
//if (message.author.id !== "226457061959925761") {
  //  return message.reply(" :x: `Bot Owner Only!` ");
//}

//message.mentions.members.first().send("YOU'VE BEEN KICKED!");


//Let's try to make embed error messages!
//Mention Error Message

const mentionembed = new Discord.RichEmbed()
.setTitle(`Mention User`)
.setColor("#ff0000");

//End MEntion Error Message

//Reason Error Message
const reasonembed = new Discord.RichEmbed()
.setTitle(`Specify Reason`)
.setColor("#ff0000");
//End Reason Error Message
//End Error messages



//Variables and Boring Stuff



let user = message.mentions.members.first();
if(!user) return message.channel.send ({
   embed : mentionembed
})

let reason = message.content.split(" ").slice(2).join(" ");
if(!reason) return message.channel.send ({
    embed : reasonembed
 })


//End Boring Variables


//Tried to make it use a "modlog channel."

//let modLog = client.channels.find("name" , "modlog");
//if(!modLog) return message.reply(" `Channel modlog not found!`");

//End


//Embed for Kick Messages
const kickembed = new Discord.RichEmbed()
.setTitle(`Kicked ${user.displayName} for ${reason}`)
//.setAuthor(`Moderator : ${message.author.username}` , `${message.author.avatarURL}`)
.setColor("#ff0000")
.setTimestamp()
//End 

//Embed for Fail Message
const failembed = new Discord.RichEmbed()
.setTitle(`Failed To Kick ${user.displayName} for ${reason}, due to insufficient permissions`)
.setColor("#ff0000")
//End

const channel = message.guild.channels.find('name' , 'welcome-leave');
if (!channel) return;

user.kick().then((user) => {
        //message.channel.send({
        channel.send({
        embed : kickembed 
    })
    message.channel.bulkDelete(2);
    const dmembed = new Discord.RichEmbed()
    .setTitle(`You've been Kicked from ${message.guild.name} for ${reason}`)
    //.setAuthor(`Moderator : ${message.author.username}` , `${message.author.avatarURL}`)
    .setTimestamp()
    .setColor("#ffff00");
    
     user.createDM();
     user.send({
    embed : dmembed
     })
}).catch(() =>{

  
    //message.channel.send({
    channel.send({
   embed : failembed
                })
    message.channel.bulkDelete(2);
            }
       );
    }
}
//Finished Kicking Haha

//Final Line 
module.exports = KickCommand;
//End Everything. The Pain is Over Yay. 