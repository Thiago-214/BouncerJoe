require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const{CommandHandler} = require('djs-commander');
const path = require ('path');

const client = new Client ({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
})

new CommandHandler({
    client,
    eventsPath: path.join(--path.dirname,'events'),
})

//Pronto
client.on('ready', (c) => {
    console.log(`✅ ${c.user.username} is online`)
})

//Responder salve
client.on('messageCreate',(msg,) =>{
    if (msg.content === 'salve' || msg.content === 'Salve' ){
        msg.reply(`Salve meu cria ${msg.author.globalName}`)
    };
} )

client.login(process.env.TOKEN);