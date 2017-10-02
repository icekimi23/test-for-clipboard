// классы, которые реализуюь аспект поведения - полет (flyBehavior)

// реализация поведения для уток, которые умеют летать
class FlyWithWings{
    constructor(){

    }

    fly(){
        console.log('Look at me! I am flying!');
    }

}

// реализвция поведения для уток, которые не умеют летать
class FlyNoWay{
    constructor(){

    }

    fly(){
        console.log('I wish I could fly!');
    }

}

// полеты на ракете
class FlyRocketPowered{
    constructor(){

    }

    fly(){
        console.log('I am flying with the rocket!');
    }
}

module.exports = {
    FlyWithWings : FlyWithWings,
    FlyNoWay : FlyNoWay,
    FlyRocketPowered : FlyRocketPowered
};