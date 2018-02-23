exports.name = "boot";
exports.time = 0
exports.delay = 0;

exports.function = function(client) {

  
  const snekfetch = require('snekfetch') //for discordbots.org stats
  
  
  //runs every hour - disabled
/*   setInterval(() => {
  
}, 3600000) */
  
    //runs every minute
setInterval(() => {
    //updates discordbots.org server count
    snekfetch.post(`https://discordbots.org/api/bots/398690824721924107/stats`)
    .set('Authorization', process.env.DBL_TOKEN)
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong with updating DBL stats:: ${err.body}`));
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: "online",
          activity: {
            name: `${client.guilds.size} servers | !!help | advaithbot.com`,
            type: 3,
          }
        })
  
    //updates ls.terminal.ink server count
   snekfetch.post(`https://ls.terminal.ink/api/v1/bots/398690824721924107`)
    .set('Authorization', process.env.TERMINAL_TOKEN)
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated Terminal stats.'))
    .catch(err => console.error(`Whoops something went wrong with updating Terminal stats: ${err.body}`)); 
}, 60000)

  // Sets status on boot
    client.user.setPresence({
          status: "online",
          activity: {
            name: `${client.guilds.size} servers | !!help | advaithbot.com`,
            type: 3,
          }
        })
  
  // Sets prefix on Bubba's servers
  client.customConfig.set('392530206121787402', {prefix: 'a!'}) //RGR | ROS community!
  client.customConfig.set('134829552496148482', {prefix: 'a!'}) //CWB
  
  
    console.log("ran boot function")
  
}