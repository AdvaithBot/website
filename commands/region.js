exports.name = "region"
exports.level = 0; 


exports.command = function(client, message) {

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
        message.channel.send("ERROR: Please report this to the bot developer: error-unrecognized-region")
        var region = message.guild.region
    }

    message.channel.send(region)
  
}