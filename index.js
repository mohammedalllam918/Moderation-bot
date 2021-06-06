const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})

client.login(Nzk1MDU0MDkyNDg1NTI1NTA0.X_Dx0w.zM3d2pe8idsQG3gjeVjYPUGHLwU).catch(() => {
    console.log('Incorrect token given!! Please make sure to go to the config folder and check all files and fill them out')
});
