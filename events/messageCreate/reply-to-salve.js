module.exports = (msg) =>{
    if (msg.content === 'salve' || msg.content === 'Salve' ){
        msg.reply(`Salve meu cria ${msg.author.globalName}`)
    };
}