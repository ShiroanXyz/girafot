exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    if (role.hasPermission(permission, checkAdmin)){
    message.channel.send({
        embed: {
            author: {
                name: `Message par ${message.author.username}`,
                icon_url: message.author.avatarURL
            },
            color: 3447003,
            description: args
        }
    })} else {
        message.channel.send("Vous ne pouvez pas faire ca!")
        }
   
}
