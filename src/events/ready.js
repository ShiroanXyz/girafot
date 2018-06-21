const config = require('../../config.json');

exports.run = (client) => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(config.setgame.name, { type: config.setgame.type });
}
