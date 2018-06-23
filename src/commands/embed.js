exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    if (message.member.roles.find("name", "Arrière-Grand-Père")){
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
        message.channel.send("Vous n'avez pas le droit");
        message.delete(10);
     }
}
