/*
    Паттерн "Команда" инкапсулирует запрос в виде объекта, делая возможной параметризацию объектов с другим запросами,
    организацию очереди и регистрацию запросов, а также поддержку отмены операций.
*/
let receivers = require('./receiver');
let commands = require('./command');
let SimpleRemoteControl = require('./invoker');

// тестируем
let simpleRemoteControl = new SimpleRemoteControl();

let lightOnCommand = new commands.LightOnCommand(new receivers.Light());
let lightOffCommand = new commands.LightOffCommand(new receivers.Light());

let garageOnCommand = new commands.GarageDoorOnCommand(new receivers.GarageDoor());
let garageOffCommand = new commands.GarageDoorOffCommand(new receivers.GarageDoor());

let stereoOnCommand = new commands.StereoSystemOnCommand(new receivers.StereoSystem());
let stereoOffCommand = new commands.StereoSystemOffCommand(new receivers.StereoSystem());


// программируем 1-ю кнопку на пульте
simpleRemoteControl.setCommand(0, lightOnCommand, lightOffCommand);
// программируем 2-ю кнопку на пульте
simpleRemoteControl.setCommand(1, garageOnCommand, garageOffCommand);
// программируем 3-ю кнопку на пульте
simpleRemoteControl.setCommand(2, stereoOnCommand, stereoOffCommand);


// нажимаем кнопки
simpleRemoteControl.onButtonWasPressed(0);
simpleRemoteControl.offButtonWasPressed(0);
simpleRemoteControl.onButtonWasPressed(1);
simpleRemoteControl.offButtonWasPressed(1);
simpleRemoteControl.onButtonWasPressed(2);
simpleRemoteControl.offButtonWasPressed(2);
