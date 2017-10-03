// абстрактный класс для добавок (в java должне наследовать от Beverage для согласования типов и фишек полиморфизма, в js это конечно не обязательно)
class CondimentDecorator{
    constructor(){

    }

    // абстрактный класс, все разновидности добавок должны реализовать этот метод
    getDescription(){

    }

    setSize(size){
        this.size = size;
    }

    getSize(){
        return this.size;
    }
}

// класс конкретного дополнения для кофе
class Mocha extends CondimentDecorator{
    constructor(beverage){
        super();
        this.beverage = beverage;
    }

    cost(){
        let cost;
        let size = this.getSize();
        if (size === 'S'){
            cost = 0.10;
        } else if (size === 'M'){
            cost = 0.15;
        } else if (size === 'L'){
            cost = 0.20;
        }

        return this.beverage.cost() + cost;
    }

    getSize(){
        return this.beverage.getSize();
    }

    getDescription(){
        return this.beverage.getDescription() + ', Mocha';
    }
}

// класс конкретного дополнения для кофе
class Soy extends CondimentDecorator{
    constructor(beverage){
        super();
        this.beverage = beverage;
    }

    cost(){
        return this.beverage.cost() + 0.15;
    }

    getDescription(){
        return this.beverage.getDescription() + ', Soy';
    }
}

// класс конкретного дополнения для кофе
class Whip extends CondimentDecorator{
    constructor(beverage){
        super();
        this.beverage = beverage;
    }

    cost(){
        return this.beverage.cost() + 0.10;
    }

    getDescription(){
        return this.beverage.getDescription() + ', Whip';
    }
}

module.exports = {
    Mocha : Mocha,
    Soy : Soy,
    Whip : Whip
};