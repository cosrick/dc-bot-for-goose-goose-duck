import { respond, prefix } from "../constant.js";

export default function (message) {
  let { content: input } = message;

  // // message.guild.roles.get('904685652669513740').setPermissions([SEND_MESSAGES: true, ADD_REACTIONS: false]);
  // console.log(JSON.stringify(message.member, null, 2));

  if (!input.startsWith(prefix)) return;
  const command = input.slice(prefix.length).toLowerCase();

  if (command == 'all') {

    return;
  }
  if (!(command in respond)) {
    message.channel.send('沒有此技能 請重新輸入');
    return;
  }
  message.delete();
  message.channel.send(`${command}-${respond[command]}`);
  
};