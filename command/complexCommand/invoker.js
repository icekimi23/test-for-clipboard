let noCommand = require('./command').noCommand;

// ИНИЦИАТОР - объект запускающий команду на выполнение (пульт управления с 5-ю кнопками в нашем примере)
class SimpleRemoteControl {
    constructor() {
        this.onCommands = [];
        this.offCommands = [];
        this._init();
    }

    // инициализирует 5 кнопок пульта командами по умолчанию
    _init() {
        for (let i = 0; i < 5; i++) {
            this.onCommands.push(new noCommand());
            this.offCommands.push(new noCommand());
        }
    }

    // установить объект комманды в слот
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    // имитация нажатия кнопки включения
    onButtonWasPressed(slot) {
        this.onCommands[slot].execute();
    }

    // имитация нажатия кнопки выключения
    offButtonWasPressed(slot) {
        this.offCommands[slot].execute();
    }

    toString() {
        let text = 'Remote control consists of: \n';
        this.onCommands.forEach((i) => {
            text += 'Button #' + (i + 1) + ': on: ' + this.onCommands[i].getName() +  + '; off: ' + this.offCommands[i].getName() + '\n';
        });
        return text;
    }

}

module.exports = SimpleRemoteControl;