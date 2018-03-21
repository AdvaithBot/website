exports.level = 0
exports.filter = (client, message) => {
    if(message.author.bot&&message.guild.id=='264445053596991498') {return true} // ignore bots on dbl
    if(message.author.bot&&message.guild.id=='110373943822540800') {return true} // ignore bots on discord bots
    return false
  console.log('ran a command')
}