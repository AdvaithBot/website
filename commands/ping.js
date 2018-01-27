exports.name = "ping"
exports.level = 0; 


exports.command = function(client, message) {
    var start = new Date().getTime()
    message.channel.send("Pinging...").then((message) => {
        var end = new Date().getTime()
        message.edit(":ping_pong: Pong! Took **" + (end - start) + "**ms");
    })
}