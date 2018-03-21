exports.name = "serverinfo"
exports.level = 0; 
exports.aliases = ["server"]

exports.command = function(client, message) {

  
  // Bot Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('EMBED_LINKS'))
         return message.channel.send('<:no:424361302069346304> I don\'t have the `Embed Links` permission! I need this to run the serverinfo command.')
  
    // Checks if running in DM
    if (message.channel.type==="dm") {
        message.channel.send({
            "embed": {
              "title": "Error",
              "description": "Did you really try to run serverinfo in a DM? smh...",
              "color": 16711680,
              "footer": {
                "text": "Not in a DM? Please report this to @advaith#9121."
              }
            }
          })
    }

    // Translates region into human-readable region
    if (message.guild.region=="vip-amsterdam") {
        var region = "<:region_amsterdam:399011531947245568> <:vip_region:399011973154471936> Amsterdam"
    } else if (message.guild.region=="brazil") {
        var region = "<:region_brazil:399011531875942401> Brazil"
    } else if (message.guild.region=="eu-central") {
        var region = "<:region_eu:399011531624546306> Central Europe"
    } else if (message.guild.region=="hongkong") {
        var region = "<:region_hongkong:399011532010160128> Hong Kong"
    } else if (message.guild.region=="japan") {
        var region = "<:region_japan:399011531981062159> Japan"
    } else if (message.guild.region=="russia") {
        var region = "<:region_russia:399011532475990016> Russia"
    } else if (message.guild.region=="singapore") {
        var region = "<:region_singapore:399011531955634196> Singapore"
    } else if (message.guild.region=="sydney") {
        var region = "<:region_sydney:399011531897176064> Sydney"
    } else if (message.guild.region=="us-central") {
        var region = "<:region_us:399011531729141762> US Central"
    } else if (message.guild.region=="us-east") {
        var region = "<:region_us:399011531729141762> US East"
    } else if (message.guild.region=="vip-us-east") {
        var region = "<:region_us:399011531729141762> <:vip_region:399011973154471936> US East"
    } else if (message.guild.region=="us-south") {
        var region = "<:region_us:399011531729141762> US South"
    } else if (message.guild.region=="us-west") {
        var region = "<:region_us:399011531729141762> US West"
    } else if (message.guild.region=="vip-us-west") {
        var region = "<:region_us:399011531729141762> <:vip_region:399011973154471936> US West"
    } else if (message.guild.region=="eu-west") {
        var region = "<:region_eu:399011531624546306> Western Europe"
    } else {
        message.channel.send("ERROR: Please report this to the bot developer at https://discord.gg/WxPH3Fc: error-unrecognized-region")
        var region = message.guild.region
    }

    //Gets the server's icon URL
    var iconURL = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`

    // Checks if there is no icon url
    if (message.guild.icon!=null) {
        var smallIconURL = iconURL
    } else { 
        var smallIconURL = "https://cdn.discordapp.com/embed/avatars/1.png"
    }

    // Translates verification level into human-readable verification level
    if (message.guild.verificationLevel=="0") {
        var verificationLevel = "None"
    } else if (message.guild.verificationLevel=="1") {
        var verificationLevel = "Low: Verified Email"
    } else if (message.guild.verificationLevel=="2") {
        var verificationLevel = "Medium: Registered for 5 mins"
    } else if (message.guild.verificationLevel=="3") {
        var verificationLevel = "(╯°□°）╯︵ ┻━┻: Server Member for 10 mins"
    } else if (message.guild.verificationLevel=="4") {
        var verificationLevel = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻: Verified Phone"
    } else {
        message.channel.send("ERROR: Please report this to the bot developer: error-unrecognized-verification-level")
        var verificationLevel = message.guild.verificationLevel
    } 
    
    // Gets amount of bots
    var botnum = 0;
    for (var [key, value] of message.guild.members) {
      if (value.user.bot)
        botnum++;
    }

    // Gets amount of users
    var users = 0;
    for (var [key, value] of message.guild.members) {
      if (value.user.bot==false)
        users++;
    }

    // Checks if server is partnered or verified
          if (message.guild.features.includes("INVITE_SPLASH") && message.guild.features.includes("VANITY_URL") && message.guild.features.includes("VIP_REGIONS")) {
            if (message.guild.features.includes("VERIFIED")) {
                var perks = "<:verified:399746960602693664> Verified"
             } else { 
                var perks = "<:partner:399767520845758465> Partnered"
               }
         } else { 
           var perks = "None"
           }
  
   // Checks if bot has external emoji perm
       if(!message.guild.members.get(client.user.id).hasPermission('USE_EXTERNAL_EMOJIS')){
          message.channel.send({
            "embed": {
              "title": ":warning: Warning",
              "description": "I don't have the `Use External Emojis` permission.",
              "color": 16763981,
              "footer": {
                "text": "Give me this permission to let the serverinfo command work fully."
              }
            }
          })
       }
    
    // Sends the serverinfo embed
    message.channel.send({
        "embed": {
          "title": "Server Information",
          "timestamp": message.guild.createdAt,
          "footer": {
            "text": "Server Created On"
          },
          "thumbnail": {
            "url": iconURL
          },
          "author": {
            "name": message.guild.name,
            "icon_url": smallIconURL
          },
          "fields": [
            {
              "name": "ID",
              "value": message.guild.id,
              "inline": true
            },
            {
              "name": "Owner",
              "value": `${message.guild.owner}`,
              "inline": true
            },
            {
              "name": "Region",
              "value": region,
              "inline": true
            },
            {
              "name": "Channels",
              "value": message.guild.channels.size,
              "inline": true
            },
            {
              "name": "Members",
              "value": message.guild.memberCount,
              "inline": true
            },
            {
                "name": "Users",
                "value": users,
                "inline": true
              },
            {
                "name": "Bots",
                "value": botnum,
                "inline": true
              },
            {
              "name": "Roles",
              "value": message.guild.roles.size,
              "inline": true
            },
            {
              "name": "Verification Level",
              "value": verificationLevel,
              "inline": true
            },
            {
              "name": "Server Perks",
              "value": perks,
              "inline": true
            } 
          ]
        }
      })

    }