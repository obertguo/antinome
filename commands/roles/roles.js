//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
//End Packages

//Class Begin
class RolesCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'roles' ,
            group: 'roles' ,
            memberName: 'roles' ,
            description: 'Displays Server Roles' 
        });
    }
//Class End

//Async Start
    async run (message, args){    



        var allroles = message.guild.roles.map(roles => roles);
        var stringrole = allroles.toString();
        var x = stringrole.length;

        var totalrole = allroles.length;


        
        const rolesembed = new Discord.RichEmbed()
        .addField(`There are ${totalrole} roles in ${message.guild.name}` , `${allroles}`);
       message.channel.send({
           embed : rolesembed
       })

    }
       //message.channel.send(message.guild.owner);
    }
//Exports Begin
module.exports = RolesCommand;
//Exports End and Code ends!