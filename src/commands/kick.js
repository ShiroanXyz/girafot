exports.run = (client, message, args) => {
    user = message.mentions.users.first();
    message.delete();
    if (message.member.hasPermission("KICK_MEMBERS")){
        user.kick();
        message.channel.send(`**${user.tag}** a été kick!`);
    } else {
        message.author.send("Vous n'avez pas le droit d'executer la commande \"kick\" !");
    };
}
