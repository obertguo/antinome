//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const moment = require("moment");
//End Packages

//Class Begin
class ServerCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'server' ,
            group: 'server' ,
            memberName: 'server' ,
            description: 'Displays Server Information' 
        });
    }
//Class End

//Async Start
    async run (message, args){    



        var bots = message.guild.members.map(members => members.user).filter(user => user.bot);
        var totalbot = bots.length;
        
        var allmembers = message.guild.members.map(members => members.user).filter(user => !user.bot);
        var totalmembers = allmembers.length;

        var allroles = message.guild.roles.map(roles => roles);
        var stringrole = allroles.toString();
        var x = stringrole.length;

        var totalrole = allroles.length;



        var txtchannel = message.guild.channels.map(channels=>channels.type).filter(type => 'text').filter(function (item) {return item.indexOf("voice") !== 0;});
        var txtchannellength = txtchannel.length
    
        var allchannels = message.guild.channels.map(channels=>channels.type).filter(type => 'text').length
    
        var voicechannel = message.guild.channels.map(channels=>channels.type).filter(type => 'text').filter(function (item) {return item.indexOf("text") !== 0;});
        var voicechannellength = voicechannel.length
    

        
        var fulldate = new Date(message.guild.createdTimestamp);
        var converted_date = moment(fulldate).format("dddd, MMMM Do YYYY, h:mm:ss a.");
        
        var fulldate2 = new Date(message.guild.joinedTimestamp);
        var converted_date2 = moment(fulldate2).format("dddd, MMMM Do YYYY, h:mm:ss a.");

        const membercountembed = new Discord.RichEmbed()
        
        .setAuthor(`Server Information for ${message.guild.name}` , `${message.guild.iconURL}`)
        //.setThumbnail(`${message.guild.iconURL}`)
        
        .setDescription(`:crown: ${message.guild.owner} is the owner, and the server is hosted in ${message.guild.region}. :crown:`)

        .addField(`Total Members :family:` , `${message.guild.memberCount}` , true)
        .addField(`Bots :robot:` , `[${totalbot}]` , true)
        .addField(`Humans :boy:` , `[${totalmembers}]` , true)

        .addField(`Total Channels :speech_left:` , `${allchannels}` , true)
        .addField(`Text Channels :speech_balloon:` , `[${txtchannellength}]` , true)
        .addField(`Voice Channels :sound:` , `[${voicechannellength}]` , true)

        .addField(`These are the ${totalbot} bots in ${message.guild.name}.` , `${bots}`)

        

        //.addField(`There Are ${totalrole} Roles In ${message.guild.name}` , `${allroles}`)

        //.addField(`Antinome Joined ${message.guild.name} On` , `${converted_date2}`)

        //.addField(`Server Region` , `${message.guild.region}`)

        .setFooter(`${message.guild.name} was created on ${converted_date}`)

    
       message.channel.send({
           embed : membercountembed
       })
    

    }
       
    }

//Exports Begin
module.exports = ServerCommand;
//Exports End and Code ends!