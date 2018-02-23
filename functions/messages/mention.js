exports.name = "mention"
exports.type = ["all"];
exports.function = function(client, message, command) {

  if(message.author.bot)
  return

  if(message.content.startsWith("<@398690824721924107>"))
  return message.reply("Hi! My prefix is \`!!\`, try \`!!help\`.")

}