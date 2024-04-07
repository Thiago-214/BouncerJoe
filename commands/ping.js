module.exports= {
    data:{
    name: 'ping',
    description: 'Check Ping'

    },
    run:({interaction})=>{
        interaction.reply('PONG! Filho da Puta');
    }
}

/*client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()){
        if(interaction.commandName === 'ping')
        interaction.reply('PONG! Filho da Puta')
    }
}
)*/