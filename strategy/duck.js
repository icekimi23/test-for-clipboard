const Quack = require('./quackBehavior').Quack;
const FlyWithWings = require('./flyBehavior').FlyWithWings;
const FlyNoWay = require('./flyBehavior').FlyNoWay;

// суперкласс для уток
class Duck{
    constructor(){
        // объект, реализующий поведение при полете (это переменный аспект, так как не все утки одинаково летают)
        this.flyBehavior = null;
        // объект, реализующий поведение крякания (это переменный аспект, так как не все утки одинаково крякают)
        this.quackBehavior = null;
    }

    // всю работу этого метода на самом деле делает объект this.flyBehavior (объект может быть любым, главное чтобы у него был метод fly)
    performFly(){
        this.flyBehavior.fly();
    }

    // всю работу этого метода на самом деле делает объект this.quackBehavior (объект может быть любым, главное чтобы у него был метод quack)
    performQuack(){
        this.quackBehavior.quack();
    }

    // предполагаем что это общий аспект (все утки одинаково плавают)
    swim(){
        console.log('I am swiming! I am beautiful!');
    }

    // динамически задаем поведение полета
    setFlyBehavior(newBehavior){
        this.flyBehavior = newBehavior;
    }

    // динамически задаем поведение крякания
    setQuackBehavior(newBehavior){
        this.quackBehavior = newBehavior;
    }
}

// реализация дикой утки
class MallardDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }
}

// реализация утки приманки
class ModelDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }
}

module.exports = {
    MallardDuck : MallardDuck,
    ModelDuck : ModelDuck
};
