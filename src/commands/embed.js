exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    if(!message.member.roles.some(r=>["Arrière-Grand-Père"].includes(r.name)) )
      return message.channel.send("Désolé, vous n'avez pas le droit de faire ca!")
    let message.channel.send({
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
