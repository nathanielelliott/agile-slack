var debug = require('debug')('botkit:channel_join');

module.exports = function(controller) {

    controller.on('bot_channel_join', function(bot, message) {

        bot.reply(message,'I have arrived! I am here to help you with agility.');

    });

}
