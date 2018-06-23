exports.run = (client, message, args) => {
    args = args.join(' ');
    message.delete();
    if (message.member.hasPermission("KICK_MEMBERS")){
    member.kick(args)
    } else {
        message.author.send("Vous n'avez pas le droit d'executer la commande \"kick\" !");
     };
}
