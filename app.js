import { Client, Guild, Intents, Permissions } from 'discord.js';
import * as dotenv from 'dotenv';
import path from 'path';
import { handler } from './commands/index.js';

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
dotenv.config({ path: path.resolve() + '/.env' });

console.log('Yay your bot is live');

client.on('ready', () => {
    console.log(`Bot is currently running on version v1.0.0`);

    client.on('messageCreate', (message) => {
        handler(message);
    })
    
});

client.login(process.env.BOTTOKEN);