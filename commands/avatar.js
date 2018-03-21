exports.name = "avatar"
exports.level = 0; 


exports.command = function(client, message) {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
    if (message.mentions.users.size > 0) {
    message.channel.send(`Avatar for, **${message.mentions.users.first().username}:**\n${avatar}`);
  } else {
    message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
    }
};
