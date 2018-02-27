//Testing Mute
const commando = require('discord.js-commando'); //Discord Commando
const ms = require("ms");
const Discord = require("discord.js");
//End Packages



//Start class
class MuteCommand extends commando.Command {
    constructor(client) {
            super(client, {
                name: 'mute' ,
                group: 'mute' ,
                memberName: 'mute' ,
                description: 'Mute people' 
            });
        }
    
//

//Testing if admins can be the ones running mute cmd.

    //
//Start async

async run (message, args){

//Only Bot Owner can do !mute 
//if (message.author.id !== "226457061959925761") {
//return message.reply(" :x: `Bot Owner Only!` ");
//}
//

//New Restricted Function
const roleembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
//.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
//.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.addField("Error Information" , `**REQUIRES MANAGE_ROLES PERMISSION!**`);
//End ROLE REQUIRED MESSAGE

//Login V2 | For Server Owner / People with Kick Members Perms.
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send({
   embed : roleembed
})
//End Restricted


//NOW LETS MAKE MORE EMBEDDED MESSAGES REEEE
//mentions
const mentionembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
//.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
//.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.addField("Error Information" , `**Mention / Ping A User!**`);
//end mentions
//Begin Muted error
const mutedembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
//.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
//.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.addField("Error Information" , `**Muted Role Not Found!**`);
//end muted error

//begin time error
const timeembed = new Discord.RichEmbed()
.setTitle(` :x: Error! `)
.setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.setColor("#ffff00")
.setTimestamp()
//.setFooter(`${user} Kicked!`, "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
//.setThumbnail("https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
.addField("Error Information" , `**Specify A Time!**`);
//end time error

//END REEE


//Begin variables
let member = message.mentions.members.first();
if(!member) return message.channel.send ({
    embed : mentionembed
})
let muteRole = message.guild.roles.find("name" , "Muted");
if(!muteRole) return message.channel.send ({
embed : mutedembed
})

let par = message.content.split(" ").slice(1);
let time = par[1]; 
if(!time) return message.channel.send({
    embed : timeembed
})



const Mutetembed = new Discord.RichEmbed()
.setTitle(`${member}`)
//.setAuthor(`Muted` , ` ${member.tag} `)
.setColor("#ffff00")
.setTimestamp()
//.setImage(user.avatarURL)
//.setDescription(`${user.createdAt}`)
.addField(`**You've been muted.**` , `*Duration | ${ms(ms(time), {long: true})}*`);

const Unmutetembed = new Discord.RichEmbed()
.setTitle(`${member}`)
//.setAuthor(`Muted` , ` ${member.tag} `)
.setColor("#ffff00")
.setTimestamp()
//.setImage(user.avatarURL)
//.setDescription(`${user.createdAt}`)
.addField(`**You've been unmuted.**` , `*Duration | ${ms(ms(time), {long: true})}*`);

//End variables


member.addRole(muteRole.id);
//message.channel.send(`${member} **You've been muted. ** *Duration | ${ms(ms(time), {long: true})}*`);
message.channel.send({
    embed : Mutetembed
});
setTimeout(function(){
    member.removeRole(muteRole);
  //  message.channel.send(`${member} **You've been unmuted.** *Duration | ${ms(ms(time), {long: true})}*`);
  message.channel.send({
      embed : Unmutetembed
  });
}, ms(time)); 

    }
}    



//Final Line 
module.exports = MuteCommand;
//End