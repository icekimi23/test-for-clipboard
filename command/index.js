/*
    Паттерн "Команда" инкапсулирует запрос в виде объекта, делая возможной параметризацию объектов с другим запросами,
    организацию очереди и регистрацию запросов, а также поддержку отмены операций.
*/

// абстрактный класс (вместо интерфейса)
class Command{
    // абстрактный метод выполнения действий ПОЛУЧАТЕЛЕЙ
    execute(){

    }
}

// КОМАНДА для управления светом - реализет интерфейс Command
class LightOnCommand extends Command{
    constructor(light){
        super();
        // инициализируется конкретным получателем запроса
        this.light = light;
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.light.on();
    }
}

// КОМАНДА для управления гаражной дверью - реализет интерфейс Command
class GarageDoorOnCommand extends Command{
    constructor(garageDoor){
        super();
        // инициализируется конкретным получателем запроса
        this.garageDoor = garageDoor;
    }

    // метод команды, которые вызывает нужные команды получателя
    execute(){
        this.garageDoor.open();
    }
}

// ПОЛУЧАТЕЛЬ - объект со своими методами
class Light{
    constructor(){

    }

    on(){
        console.log('Light is on');
    }

    off(){
        console.log('Light is off');
    }
}

// ПОЛУЧАТЕЛЬ - еще один объект со своими методами
class GarageDoor{
    constructor(){

    }

    open(){
        console.log('Garage door is open');
    }

    close(){
        console.log('Garage door is closed');
    }
}

// ИНИЦИАТОР - объект запускающий команду на выполнение (пульт управления с одной кнопкой в нашем примере)
class SimpleRemoteControl{
    constructor(){
        // единственный слот для комманды
        this.slot = null;
    }

    // установить объект комманды в слот
    setCommand(command){
        this.slot = command;
    }

    // имитация нажатия кнопки
    buttonWasPressed(){
        this.slot.execute();
    }
}

// тестируем
let simpleRemoteControl = new SimpleRemoteControl();
let lightCommand = new LightOnCommand(new Light());
let garageCommand = new GarageDoorOnCommand(new GarageDoor());

// программируем кнопку на пульте на выполнение команды с освещением
simpleRemoteControl.setCommand(lightCommand);
// нажимаем кнопку
simpleRemoteControl.buttonWasPressed();

// программируем кнопку на пульте на выполнение команды с гаражной дверью
simpleRemoteControl.setCommand(garageCommand);
// нажимаем кнопку
simpleRemoteControl.buttonWasPressed();











