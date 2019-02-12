const Discord = require('discord.js');
module.exports = {
    name: '8ball',
    description: "Let the bot decide your fates.",
    execute(message, args) {
        var options = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Do not count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful'
        ];

        const fortune = options[Math.floor(Math.random() * options.length)];
        if(args.length === 0) return message.channel.send('Baka, you forgot to say your fortune!');
        args = String(args).split(',').join(' ');

        var fortuneEmbed = new Discord.RichEmbed()
        .setAuthor(`🎱 ${message.author.tag} 🎱` , `${message.author.avatarURL}`)
        .addField(args, fortune)
        .setColor("#36393E");

        message.channel.send({embed : fortuneEmbed});
    }
}