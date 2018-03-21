exports.name = "avatar"
exports.level = 0; 


exports.command = function(client, message) {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().avatarURL : msg.author.avatarURL;
    if (msg.mentions.users.size > 0) {
    msg.channel.send(`Avatar for, **${msg.mentions.users.first().username}:**\n${avatar}`);
  } else {
    msg.channel.send(`Avatar for, **${msg.author.username}:**\n${avatar}`);
    }
};
