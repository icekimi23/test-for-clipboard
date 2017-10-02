/*
    Паттерн "Стратегия" определяет семейство алгоритмов, инкапсулирует каждый из них и обеспечивает их взаимозаменяемость.
    Он позволяет модифицировать алгоритмы независимо от их использования на стороне клиента.
*/
const MallardDuck = require('./duck').MallardDuck;
const ModelDuck = require('./duck').ModelDuck;

const FlyRocketPowered = require('./flyBehavior').FlyRocketPowered;

let mallardDuck = new MallardDuck();

mallardDuck.performFly();
mallardDuck.performQuack();
mallardDuck.swim();

let modelDuck = new ModelDuck();

// изначально утака приманка не летает
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
// но тут мы ставим ей реактивный двигатель
modelDuck.performFly();