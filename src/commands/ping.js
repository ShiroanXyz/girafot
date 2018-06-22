exports.run = (client, message, args) => {
    message.channel.send(':ping_pong:').then(m => {
        m.edit({
            embed: {
                description: `:ping_pong: Pong! - Temps mis: **${m.createdTimestamp - message.createdTimestamp}ms**`
            }
        });
    });
}

exports.help = {
    name: 'ping',
    category: 'utility',
    description: 'Pong!'
}
