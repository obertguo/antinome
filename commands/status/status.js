//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Class Begin
class StatusCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'status' ,
            group: 'status' ,
            memberName: 'status' ,
            description: 'Displays Server Statuses' 
        });
    }
//Class End

//Async Start
    async run (message, args){    

        var online = message.guild.presences.map(presences => presences.status).filter(function (item) {return item.indexOf("idle") !== 0;}).filter(function (item) {return item.indexOf("dnd") !== 0;}).filter(function (item) {return item.indexOf("offline") !== 0;}).length;
        var idle = message.guild.presences.map(presences => presences.status).filter(function (item) {return item.indexOf("dnd") !== 0;}).filter(function (item) {return item.indexOf("online") !== 0;}).filter(function (item) {return item.indexOf("offline") !== 0;}).length;
        var dnd = message.guild.presences.map(presences => presences.status).filter(function (item) {return item.indexOf("idle") !== 0;}).filter(function (item) {return item.indexOf("online") !== 0;}).filter(function (item) {return item.indexOf("offline") !== 0;}).length;
    
        var offline = message.guild.memberCount - online - idle - dnd 
        
        const statusembed = new Discord.RichEmbed()
        .addField(`Online :green_heart:` , `${online}` , true)
        .addField(`Idle :yellow_heart:` , `${idle}` , true)
        .addBlankField()
        .addField(`DND :heart:` , `${dnd}` , true)
        .addField(`Offline :blue_heart:` , `${offline}` , true);

       message.channel.send({
           embed : statusembed
       })

    }
       //message.channel.send(message.guild.owner);
    }
//Exports Begin
module.exports = StatusCommand;
//Exports End and Code ends!