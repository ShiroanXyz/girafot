exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    message.channel.send({
        embed: {
            author: {
                name: `Suggested by ${message.author.username}`,
                icon_url: message.author.avatarURL
            },
            color: 0xff66b3,
            description: args
        }
    }).then(function (message) {
        message.react('👍');
        message.react('👎');
        message.pin();
    });
}
