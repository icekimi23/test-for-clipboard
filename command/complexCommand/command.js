// абстрактный класс (вместо интерфейса)
class Command {
    constructor() {
        this.name = '';
    }

    // абстрактный метод выполнения действий ПОЛУЧАТЕЛЕЙ
    execute() {

    }

    // абстрактный метод отмены действия
    undo(){

    }

    getName(){
        return this.name;
    }

}

// КОМАНДА для управления включением света - реализет интерфейс Command
class LightOnCommand extends Command{
    constructor(light){
        super();
        // инициализируется конкретным получателем запроса
        this.light = light;
        this.name = 'Command for turn on the light';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.light.on();
    }

    undo(){
        this.light.off();
    }
}

// КОМАНДА для управления выключением света - реализет интерфейс Command
class LightOffCommand extends Command{
    constructor(light){
        super();
        // инициализируется конкретным получателем запроса
        this.light = light;
        this.name = 'Command for turn off the light';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.light.off();
    }

    undo(){
        this.light.on();
    }
}

// КОМАНДА для управления открытием гаражной двери - реализет интерфейс Command
class GarageDoorOnCommand extends Command{
    constructor(garageDoor){
        super();
        // инициализируется конкретным получателем запроса
        this.garageDoor = garageDoor;
        this.name = 'Command for open the garage door';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.garageDoor.open();
    }
}

// КОМАНДА для управления закрытием гаражной двери - реализет интерфейс Command
class GarageDoorOffCommand extends Command{
    constructor(garageDoor){
        super();
        // инициализируется конкретным получателем запроса
        this.garageDoor = garageDoor;
        this.name = 'Command for close the garage door';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.garageDoor.close();
    }
}

// КОМАНДА для управления включением стерео системой - реализет интерфейс Command
class StereoSystemOnCommand extends Command {
    constructor(stereoSystem) {
        super();
        // инициализируется конкретным получателем запроса
        this.stereoSystem = stereoSystem;
        this.name = 'Command for turn on the stereo system';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute() {
        this.stereoSystem.on();
        this.stereoSystem.setCD();
        this.stereoSystem.setVolume(11);
    }
}

// КОМАНДА для управления выключением стерео системой - реализет интерфейс Command
class StereoSystemOffCommand extends Command {
    constructor(stereoSystem) {
        super();
        // инициализируется конкретным получателем запроса
        this.stereoSystem = stereoSystem;
        this.name = 'Command for turn off the stereo system';
    }

    // метод команды, которые вызывает нужные команды получателя
    execute() {
        this.stereoSystem.off();
    }
}

// команда, которая не делает ничего, можно использовать как обработчик по умолчанию
class noCommand extends Command{
    constructor(){
        super();
        this.name = 'Default command';
    }
    execute(){

    }
}

module.exports = {
    LightOnCommand : LightOnCommand,
    LightOffCommand : LightOffCommand,
    GarageDoorOnCommand : GarageDoorOnCommand,
    GarageDoorOffCommand : GarageDoorOffCommand,
    StereoSystemOnCommand : StereoSystemOnCommand,
    StereoSystemOffCommand : StereoSystemOffCommand,
    noCommand : noCommand
};