let noCommand = require('./command').noCommand;

// ИНИЦИАТОР - объект запускающий команду на выполнение (пульт управления с 5-ю кнопками в нашем примере)
class SimpleRemoteControl {
    constructor() {
        // кнопки включения
        this.onCommands = [];
        // кнопки выключения
        this.offCommands = [];
        // кнопка глобальной отмены
        this.undoCommand = null;
        this._init();
    }

    // инициализирует 5 кнопок пульта командами по умолчанию
    _init() {
        for (let i = 0; i < 5; i++) {
            this.onCommands.push(new noCommand());
            this.offCommands.push(new noCommand());
        }
        this.undoCommand = new noCommand();
    }

    // установить объект комманды в слот
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    // имитация нажатия кнопки включения
    onButtonWasPressed(slot) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    // имитация нажатия кнопки выключения
    offButtonWasPressed(slot) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonWasPressed(){
        this.undoCommand.undo();
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