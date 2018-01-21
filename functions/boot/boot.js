exports.name = "boot";
exports.time = 0
exports.delay = 0;

exports.function = function(client) {

  const snekfetch = require('snekfetch') //for discordbots.org stats
  
  
  //runs every hour, used for getting server count for stuff
setInterval(() => {
  //updates discordbots.org server count
  snekfetch.post(`https://discordbots.org/api/bots/398690824721924107/stats`)
    .set('Authorization', process.env.DBL_TOKEN)
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: "online",
          activity: {
            name: `${client.guilds.size} servers`,
            type: 3,
          }
        })
}, 3600000)

  // Sets status on boot
    client.user.setPresence({
          status: "online",
          activity: {
            name: `${client.guilds.size} servers`,
            type: 3,
          }
        })
  
    console.log("ran boot function")
  
}