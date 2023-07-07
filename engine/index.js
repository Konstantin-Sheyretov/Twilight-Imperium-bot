const repl = require('node:repl');
const Engine  = require('./Engine');

const botName = 'Bot';

const bot = new Engine(botName);

repl.start({ prompt: '> ', eval: bot.processInput.bind(bot) }); 