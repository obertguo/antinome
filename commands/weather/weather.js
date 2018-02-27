//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const Forecast = require("forecast");
const NodeGeocoder = require('node-geocoder');
const Moment = require("moment");
//End Packages

//Start class
class WeatherCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'weather' ,
                group: 'weather' ,
                memberName: 'weather' ,
                description: 'Weather Information' 
            });
        }
    
//End class

//Start async

async run (message, args){
      
      // Initialize with custom settings DarkSky Weather Stuff
      var forecast = new Forecast({
        service: 'darksky.net',
        key: '359eb3e06be3de257a3978eacdf02a7b', //ApiKey from Darksky
        units: 'celcius',
        cache: true,
        ttl: {
          minutes: 5
        }
      });


//Geocoder Stuff
      var options = {
        provider: 'google',
       
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyC0MEPsmfnPPsSiLWeCllhw_PSV_kT6Q6o', // apiKEY from Google Maps
        formatter: null         // 'gpx', 'string', ...
      };


      //-----
       
      var geocoder = NodeGeocoder(options);
       
      var input = message.content.split(" ").slice(1).join(" ");
//---

      geocoder.geocode(input)
        .then(function(res) {

            //Variables for long and lat, and full location names, (Geocoder)
    var format = res.map(res =>res.formattedAddress);
    var la = res.map(res =>res.latitude);
    var lo = res.map(res =>res.longitude);


     
//Forecast

       forecast.get([la, lo], function (err, result) {
        
                if (err) {
                  return console.dir(err);
                }

                const errorembed = new Discord.RichEmbed()
                .setTitle(` :x: Error! `)
                .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
                .setColor("#ffff00")
                .setTimestamp()
                .addField("Error Information" , `**Input A Valid Location!**`);

                //checks if location is valid.
                if(!result) return message.channel.send({
                    embed : errorembed
                });
                //

                //C TO F
                var C = Math.round(parseFloat(result.currently.temperature, 10));
                var F = C * 9 / 5 + 32;
                var FRounded = Math.round(F);

                var resultembed = new Discord.RichEmbed()
                .setTitle(`Weather Information For ${format}`)
                .setColor("#17e510")
                .setAuthor(`${message.author.tag}` , ` ${message.author.avatarURL} `)
            
                .addBlankField(true)

                .addField(`Latitude & Longitude: [${result.latitude} , ${result.longitude}]` , `Timezone: [${result.timezone}]`)
                .addBlankField(true)
                .addBlankField(true)
                .addBlankField(true)
                .addField(`Description:` , `${result.currently.summary}`, true)
                .addField(`Temperature:` , `${Math.round(parseFloat(result.currently.temperature, 10))}°C / ${FRounded}°F` , true) 
                .addField(`Humidity:` , `${result.currently.humidity * 100}%` , true) 
                .setTimestamp();

                message.channel.send({
                    embed : resultembed
                })


       })
    })
    //Error message for +weather (blank). Lol 
    
       .catch(function(err) {

        const errorembed = new Discord.RichEmbed()
        .setTitle(` :x: Error! `)
        .setAuthor("Antinome." , "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png")
        .setColor("#ffff00")
        .setTimestamp()
        .addField("Error Information" , `**Input A Valid Location! [Be More Specific!]**`);

        console.log(err);
        message.channel.send({
            embed : errorembed
        });
      });
//--------------------------------------------------------


    }
}

//
//Final Line 
module.exports = WeatherCommand;
//End Everything. The Pain is Over Yay. 