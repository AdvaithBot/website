exports.name = "die"
exports.level = 10; 


exports.command = function(client, message) {

  message.channel.send(":ok_hand::skin-tone-4:  Killing the bot...")
        .then(() => {
            process.exit()
        })
  
}