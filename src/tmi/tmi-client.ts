import tmi from 'tmi.js';
require('dotenv').config();

const { env } = process;

const { CHANNEL_NAME, BOT_USERNAME, BOT_TOKEN } = env;

export const client = new tmi.Client({
  channels: [CHANNEL_NAME!],
});

client.on('message', (channel: string, tags: tmi.ChatUserstate, message: string, self: boolean): void => {
  if (self || !message.startsWith('!')) return;

  console.log(`${tags['display-name']}: ${message}`);
});
