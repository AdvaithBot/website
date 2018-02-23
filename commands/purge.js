exports.name = "purge"
exports.level = 0;
exports.aliases = ["clear", "prune", "p"]

exports.command = function(client, message) {

    // Checks for Manage Messages permission
    if(!message.member.hasPermission('MANAGE_MESSAGES')&&message.member.id!=="190916650143318016")
    return message.channel.send({
      "embed": {
        "title": "Error",
        "description": "You do not have the \"Manage Messages\" permission.",
        "color": 16711680,
        "footer": {
          "text": "Please contact a server admin."
        }
      }
    })
    
  if(message.author.bot)
  return message.channel.send('Nice try, but bots can\'t use mod commands.')
  
    // Gets number of messages to delete
    let deleteCount = parseInt(message.content.split(' ').slice(1).join(' '));
    deleteCount++

    // Checks if delete count is valid
    if(!deleteCount || deleteCount < 2)
      return message.channel.send({
        "embed": {
          "title": "Error",
          "description": "Invalid amount of messages to delete",
          "color": 16711680,
          "footer": {
            "text": "Please provide a number higher than 0."
          }
        }
      })

    // Purges
    message.channel.bulkDelete(deleteCount)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

}
