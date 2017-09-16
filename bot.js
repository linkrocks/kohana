const commando = require('discord.js-commando');
var auth = require('../../auth.json');

const bot = new commando.Client(
    {
        commandPrefix:'~'
    });

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(auth.token);




//logger.remove(logger.transports.Console);
//logger.add(logger.transports.Console,
//{
//    colorize: true
//});

//logger.level = 'debug';

//bot.on('ready', function (e)
//{
 //   logger.info('Connected');
 //   logger.info('Logged in as: ');
 //   logger.info(bot.username + ' - (' + bot.id + ')');
//});

/*bot.on('message', function (user, userID, channelID, message, e)
{
    if (message.substring(0, 1) == '~')
    {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd.toLowerCase())
        {
            case 'ping':           
                bot.sendMessage(
                {
                    to: channelID,
                    message: 'Pong'
                });
                break;
        }
    }
});
*/