// классы, которые реализуюь аспект поведения - крякание (quackBehavior)

// реализация поведения для уток, которые крякают в обысной манере
class Quack{
    constructor(){

    }

    quack(){
        console.log('Quack! Quack!');
    }

}

// реализация поведения для уток, которые не крякают
class MuteQuack{
    constructor(){

    }

    quack(){
        console.log('<< Silence >>');
    }

}

// реализация поведения для уток, которые не крякают, а пронзительно писчят
class Squeak{
    constructor(){

    }

    quack(){
        console.log('Squeak!!!');
    }

}

module.exports = {
    Quack : Quack,
    MuteQuack : MuteQuack,
    Squeak : Squeak
};