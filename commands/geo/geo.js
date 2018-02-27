//Begin packages
const Discord = require("discord.js");
const commando = require('discord.js-commando'); //Discord Commando
const client = new Discord.Client();
const NodeGeocoder = require('node-geocoder');
//End Packages

//Start class
class GeoCommand extends commando.Command {
   constructor(client) {
            super(client, {
                name: 'geo' ,
                group: 'geo' ,
                memberName: 'geo' ,
                description: 'Geo' 
            });
        }
    
//End class

//Start async

async run (message, args){

    var options = {
        provider: 'google',
       
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyC0MEPsmfnPPsSiLWeCllhw_PSV_kT6Q6o', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
      };
       
      var geocoder = NodeGeocoder(options);
       
      // Using callback

     // geocoder.geocode('Toronto', function(err, res) {
   //     console.log(res);
    //  });
       
      // Or using Promise
      var input = message.content.split(" ").slice(1).join(" ");
      geocoder.geocode(input)
        .then(function(res) {

       // console.log();
       console.log(res);

          message.channel.send(`${res.map(res =>res.latitude)}` );
          message.channel.send(`${res.map(res =>res.longitude)}` );
          message.channel.send(`${res.map(res =>res.formattedAddress)}` );

        })
        .catch(function(err) {
          console.log(err);
          message.channel.send(`Invalid Place!`);
        });


    }
}


//Final Line 
module.exports = GeoCommand;
//End Everything. The Pain is Over Yay. 