const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | BlueBot 💙✨ `,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` BlueBot
 .`, 'https://cdn.discordapp.com/avatars/349095859859881984/6a942bc4ff4d014a222dd91e1a6daa48.jpg?size=128')

  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
var perfix = "prefix";
      if (message.content.startsWith(prefix + 'clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`**You Don't Have**  *MANAGE_MESSAGES*  **Permission **`).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
   const messagecount = parseInt(args.join(' '));
   message.channel.fetchMessages({
     limit: messagecount
 }).then(messages => message.channel.bulkDelete(messages));
    var embed = new Discord.RichEmbed()
        .setTitle('تم مسح الشات بنجاح :white_check_mark: ')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed).then(m => {
    m.delete(1000);
});
 };
 });




client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = "-"; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});






client.on('message', message => {
    if (message.content.startsWith("-info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO BlueBot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});





const perfix = '-';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**يجب تحديد الشخص**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});






client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**message**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});





client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
})







client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "bc")) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "BlueBot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .addField('السيرفر', message.guild.name)
       .addField('المرسل ', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });








client.on("message", msg => {
           var prefix = "-";//تكدر تغير البريفكس
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
        }
});


   client.on('message', message => {
       if(message.content.startsWith(`${prefix}invite`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Invite BlueBot")
           .setURL("https://discordapp.com/api/oauth2/authorize?client_id=<bot_id>8&scope=bot&permissions=8" + `${client.user.id}` + "&permissions=8&scope=bot")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });




client.on('message', message => {
       if(message.content.startsWith(`${prefix}support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Join Support Server")
           .setURL("https://discord.gg/p4xQ6jv")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });




client.on('message',function(message) {
    let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**#-  ${args}**`); 
  }
});



client.on("message", message => {
    
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ط§ظ„ط£ظ…ط± ظ„ظ„ط§ط¯ط§ط±ظ‡ ظپظ‚ط· **");
        const starEmbed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setColor("RANDOM")
.setDescription(`**
صاحب السيرفر :key: \` ${message.guild.owner.user.username} \`                                        
عدد اعضاء السيرفر :bar_chart: \` ${message.guild.memberCount}\`
                                  رومات السيرفر 
\`#\`${message.guild.channels.filter(m => m.type === 'text').size} \🔈\`${message.guild.channels.filter(m => m.type === 'voice').size}
 رتب السيرفر :scroll: 
${message.guild.roles.size}
**  `)
        message.channel.send(starEmbed)
    }
});
   









client.on('message', message => {   
if (message.author.boss) return;
var prefix = "-";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 
 ${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}  
});  




client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "-unmute") { // حط البرفكس حقت بوتك قبل الامر
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }
 
};
 
})





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
__~~BlueBot~~__ By: iiBlueGamer295YT| SK ♕#0548
╭━━╮╭╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭╮╭┳━━┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃┃┃┃┃━┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╰╯┃┃━┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻━━┻━━┻━━━┻━━┻━╯
╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ -bc <message> ➾ message all members in server

❖ -mute <user> <time> <reason>

❖ -unmute <user>

❖ -clear <number>

❖ -ban <mention> <reason> ➾ ban member from server

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ -id ➾ your id

❖ -avatar ➾ your avatar account

❖ -ping ➾ to see ping

❖ -info ➾ user & bot informations 

❖ -server ➾ server informations

❖ -own ➾ bot owner

❖ -invite ➾ bot invite link

❖ -support ➾ server support link

❖ -msg ➾  for send msg for someone by bot

❖ -send ➾  to send message with react in it to channel 

==================================================================

Server support: https://discord.gg/p4xQ6jv

==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot

==================================================================

`);

    }
});  
 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~BlueBot~~__
╭━━╮╭╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭╮╭┳━━┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃┃┃┃┃━┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╰╯┃┃━┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻━━┻━━┻━━━┻━━┻━╯
 __created By__: iiBlueGamer295YT| SK #0548

Server Support : https://discord.gg/p4xQ6jv

bot link : https://discordapp.com/api/oauth2/authorize?client_id=483499229407477762&permissions=8&scope=bot
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});
  



  
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    var reason = args.slice(2).join(" ");
    var userM = message.mentions.users.first() || message.guild.members.get(args[1]);
    
    if(command == prefix + 'ban') {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        
        if(!userM) return message.reply("**منشن شخص**");
        if(!message.guild.member(userM).bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
        
        if(!reason) reason = 'No reason.';
        
        message.guild.member(userM).ban(7, userM);
        message.channel.send(`**:white_check_mark: <@${userM.id}> banned from the server ! Reason: \`\`${reason}\`\` :airplane:**`);
    }
});



  client.on('message', msg => {
  if(msg.content === 'ping')
  msg.reply('pong')
});
  




client.on('message' , message => {
  
if (message.content.startsWith("-sug")) {
          if(!message.channel.guild) return message.reply('هذا الامر للسيرفرات فقط')
      if (message.author.bot) return;
            if (!message.channel.guild) return;
            let args = message.content.split(" ").slice(1).join(" ");

                var xsatt = new Discord.RichEmbed()
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
              .setThumbnail(message.guild.iconURL)
              .setColor('RANDOM')
              client.users.get("349095859859881984").send({embed: xsatt});

            let embed = new Discord.RichEmbed()
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(' ✅ | **__ تم ارسال الأقتراح الى صاحب البوت __**')
               .setThumbnail(message.author.avatarURL)


          message.channel.send(embed);
        }});






client.on('guildMemberRemove', member => {
let channel = member.guild.channels.find('name', 'welcome');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:cry: `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| تبقا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("BlueBot")
    .setTimestamp()

  channel.sendEmbed(embed);
});











client.login(process.env.BOT_TOKEN);
