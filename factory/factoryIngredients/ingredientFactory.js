const ThinCrustDough = require('./ingredients').ThinCrustDough;
const MarinaraSauce = require('./ingredients').MarinaraSauce;
const ReggianoCheese = require('./ingredients').ReggianoCheese;
const ThickCrustDough = require('./ingredients').ThickCrustDough;
const MozzarellaCheese = require('./ingredients').MozzarellaCheese;
const PlumTomatoSauce = require('./ingredients').PlumTomatoSauce

// абстрактный класс фабрики ингридиентов, вместо использования интерфейса
class PizzaIngredientFactory {

    // абстрактные методы для теста, соуса и сыра
    createDough() {

    }

    createSauce() {

    }

    createCheese() {

    }

}

// Фабрика ингридиентов для Нью-Йорка
class NYPizzaIngredientFactory extends PizzaIngredientFactory {
    constructor() {
        super();
    }

    createDough() {
        return new ThinCrustDough();
    }

    createSauce() {
        return new MarinaraSauce();
    }

    createCheese() {
        return new ReggianoCheese();
    }

}

// Фабрика ингридиентов для Чикаго
class ChicagoIngredientFactory extends PizzaIngredientFactory {
    constructor() {
        super();
    }

    createDough() {
        return new ThickCrustDough();
    }

    createSauce() {
        return new PlumTomatoSauce();
    }

    createCheese() {
        return new MozzarellaCheese();
    }

}

module.exports = {
    NYPizzaIngredientFactory: NYPizzaIngredientFactory,
    ChicagoIngredientFactory: ChicagoIngredientFactory
};