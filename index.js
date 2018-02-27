const commando = require('discord.js-commando'); //Discord Commando
//const bot = new commando.Client();
const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix : config.prefix,
    owner : config.ownerID
    //owner : ['226457061959925761' , '285072708901797888']
});
const ms = require("ms"); //for mute stuff
const Discord = require("discord.js"); //Discord JS
const client = new Discord.Client();

const YTDL = require('ytdl-core');
const Request = require('request');


bot.on('ready', () => {
    console.log('ITS ALIVE!');
    //bot.user.setGame('+help');
    //bot.user.setStatus('dnd');
  });
 

//Invite message
bot.on('guildMemberAdd' , member => {

//Welcome Embedded
const welcomeembed = new Discord.RichEmbed()
.setTimestamp()
.setTitle(`Please Welcome ${member.displayName} to ${member.guild.name}!`)
.setDescription("Read #rules-and-about, #resources-for-pianists, #faq.");
//End Welcome Embedded

const channel = member.guild.channels.find('name' , 'bot-testing');
if (!channel) return;

channel.send({
    embed : welcomeembed 
})

});

bot.on('guildMemberRemove' , member => {
    

    const leaveembed = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle(`${member.displayName} has left ${member.guild.name}.`)

    
    const channel = member.guild.channels.find('name' , 'welcome-leave');
    if (!channel) return;
    
    channel.send({
        embed : leaveembed 
    })
    
    });
//End Invite

//Line Break----------------------------

//Bot responding to meassages | Start |
//-------------------
//EVAL COMMAND! 
bot.on("message", message => {
    if(message.content == 'id'){
        message.channel.sendMessage(config.ownerID);
    }
});

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith("=" + "eval")) {
      if(message.author.id !== '226457061959925761') return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`Lol! Error\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
}
  });


  //Eval for Aiir
  bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith("=" + "aiirval")) {
      if(message.author.id !== '217215496267890689') return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`Lol! Error\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
}
  });
  //

//END EVAL





//FILTER TOTAL GUILD MEMBERS TO JUST ONLY BOT MEMBERS

bot.on('message' , (message) => {

    if (message.content.startsWith("=" + "emoji")) {

        //MAP OUT ALL MEMBERS AND FILTER
       // var y = message.guild.members.map(members => members.user).filter(user => user.bot)
      //  //SHOWS HOW MANY BOTS THERE ARE
        //var z = y.length;
        //var z = message.guild.memberCount;

        //console.log(`${z}`);
        message.channel.send(`${guild.emojis.map(e => e.id).join('')} , ${guild.roles.sort((a, b) => a.position - b.position || a.id - b.id).last().name}`);


    }
});


//bot.on('message' , (message) => {
    
        //if (message.content.startsWith("=" + "user")) {
        //    var y = message.guild.members.map(members => members.user).filter(user => !user.bot)
        //    var z = y.length;
        //    console.log(`${z}`);
        //    message.channel.send(`${z}`);
       // }
    //});


   // bot.on('message' , (message) => {
        //
          //  if (message.content.startsWith("=" + "role")) {
            //    var y = message.guild.roles.map(roles => roles);
             //   var z = y.length;
            //    console.log(`${y} ${z}`);
             //   message.channel.send(`${y} ${z}`);
         //   }
    //    });\
    bot.on('message' , (message) => {
        
        
        
        //
            if(message.content == '=size'){
               // message.channel.sendMessage(`${bot.guilds.size}`); 
                var x = bot.guilds.map(guilds => guilds.name);

                var checkX = x.toString();

                var totalX = checkX.length;


             //   message.channel.sendMessage(`${x}`);
              //  console.log(bot.guilds);

              if(x > 1024){
                
                if(message.author.id !== config.ownerID) return;
            var replyembed = new Discord.RichEmbed()
            .setAuthor(`Information`)
            .setDescription(`Antinome is in ${bot.guilds.size} servers!`)
           // .setFooter(`${bot.uptime}`)
            .setColor("#17e510");

    
            message.channel.send({
                embed : replyembed
            });
        }
        else{
            if(message.author.id !== config.ownerID) return;
            var replyembed = new Discord.RichEmbed()
            .setAuthor(`Information`)
            .setThumbnail('https://cdn.discordapp.com/avatars/363657330878840833/0ff3ba259ec06c9fba98feaab4fe9693.png?size=2048')
            .setDescription(`**Antinome is in ${bot.guilds.size} servers!**`)
            .addBlankField(true)
            .setFooter(`Bot Uptime : ${process.uptime()} Seconds.`)
            .addField(`List Of Servers` , `${x}`)
            .setColor("#17e510");

    
            message.channel.send({
                embed : replyembed
            });
        }
        }
        });        
    


//Change bot game 
bot.on('message' , (message) => {
    const args = message.content.split(" ").slice(1).join(" ");
    //if(!args) return message.channel.send('Failure!');
    if (message.content.startsWith("=" + "game")) {
        if(message.author.id !== config.ownerID) return;
        //message.channel.send(`${args}`);
        bot.user.setGame(`${args}`);
    }
});

//

bot.on('message' , (message) => {
    const args = message.content.split(" ").slice(1);
    //if(!args) return message.channel.send('Failure!');
    if (message.content.startsWith("=" + "status")) {
        if(message.author.id !== config.ownerID) return;
        //message.channel.send(`${args}`);
        bot.user.setStatus(`${args}`);
    }
});


//Bot responding to messages | End |


//Music Bot
bot.on('message' , (message) => {
    var servers = [];
    var prefix = '//';
    
    
    function play(connection, message){
        var server = servers[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
        server.queue.shift();
    
        server.dispatcher.on("end" , function(){
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    }
    
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()){
        case "play":
    
        if(message.author.id !== config.ownerID) return;
    
        if (!args[1]){
            message.channel.send(`Error! No Link Provided!`)
            return;
        }
        if (!message.member.voiceChannel){
            message.channel.send(`You Must Be In A Voice Channel!`)
            return;
        }
    
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue : []
        }
    
        var server = servers[message.guild.id];
        server.queue.push(args[1]);
    
        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            play(connection, message);
        });
        break;
    //--------------
        case "skip":
    
        if(message.author.id !== config.ownerID) return;
    
        //var server = servers[message.guild.id];
    
        //if(server.dispatcher) server.dispatcher.end();
        message.channel.send(`In Progress!`);
     
        break;
    //---------------
        case "stop":
    
        if(message.author.id !== config.ownerID) return;
    
    
        var server = servers[message.guild.id];
    
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
    }
});
//End 


//Begin groups
bot.registry
.registerDefaultTypes()
.registerGroups([
    ['roll' , 'Roll'],
    ['kappa' , 'Kappa'],
    ['thonk' , 'Thonk'],
    ['pfp' , 'Pfp'],
    ['created' , 'Created'],
    ['lastmessage' , 'Lastmessage'],
    ['wiki' , 'Wiki'],
    ['urban' , 'Urban'],
    ['urandom' , 'Urandom'],
    ['yomama' , 'Yomama'],
    ['oneliner' , 'Oneliner'],
    ['yt' , 'YT'],
    ['8ball' , '8Ball'],
    ['weather' , 'Weather'],
    ['geo' , 'Geo'],
    ['mute' , 'Mute'],
    ['ban' , 'Ban'],
    ['embed' , 'Embed'],
    ['purge' , 'Purge'],
    ['kick' , 'Kick'],
    ['server' , 'Server'],
    ['info' , 'Info'],
    ['invite' , 'Invite'],
    ['roles' , 'Roles'],
    ['status' , 'Status']
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(__dirname + "/commands");
//End Groups





//Bot Login Auth--------------------
//bot.login('MzYzNjU3MzMwODc4ODQwODMz.DLEoSg.oDcQyKD5rJwzImLi0vjYQyiaL8M');
bot.login(config.token);
//End-------------------------------