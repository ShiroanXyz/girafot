exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    message.channel.send({
        embed: {
            author: {
                name: `Message par ${message.author.username}`,
                icon_url: message.author.avatarURL
            },
            color: 0xff66b3,
            description: args
        }
    });
}
