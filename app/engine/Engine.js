const error = require('./error');
const config = require('./config');

class Engine {

    constructor(player) {
        this.player = player;
    }

    processInput(input) {
        console.log(`input is ${input}`);
        try {
            switch (this._getCommand(input)) {
                case 'name': console.log('hooray'); break;
                case 'go': break;
                case 'change': break;
                default: throw new Error(error.unsupportedCommand);
            }

        }
        catch (error) {
            console.log(error.message);
        }
    }

    _getCommand(input) {
        let command = input;
        if ( input.indexOf(' ') !== -1) command = input.slice(0, input.indexOf(' '));

        if (!config.commands.includes(command)) throw new Error(error.commandUnknown);

        return command;
    }

    _getArguments (input){
        return input.split(' ');
    }

}

module.exports = Engine;