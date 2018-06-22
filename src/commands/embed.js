exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    message.channel.send({
        embed: {
            author: {
                name: `Message par ${message.author.username}`,
                icon_url: message.author.avatarURL
            },
            color: 3447003,
            description: args
        }
    });
}
