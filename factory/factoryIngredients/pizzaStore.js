const CheesePizza = require('./pizza').CheesePizza;
const ChicagoIngredientFactory = require('./ingredientFactory').ChicagoIngredientFactory;
const NYPizzaIngredientFactory = require('./ingredientFactory').NYPizzaIngredientFactory;


// абстрактный класс принимающий заказы на изготовление пиццы
class PizzaStore {
    constructor() {
    }

    orderPizza(type) {
        let pizza = this.createPizza(type);
        // дальше процесс отработан и одинаков для каждой пиццы
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        // и наш результат - вкусная пицца
        return pizza;
    }

    // абстрактный(но не всегда должен быть таким) метод(фабричный метод), каждый региональный магазин может реализовать этот метод по своему
    createPizza() {

    }

}

// класс принимающий заказы на изготовление пиццы в NY style
class NYStylePizzaStore extends PizzaStore {
    constructor() {
        super();
        // теперь ингридиенты нам предоставляет фабрика
        this._ingredientFactory = new NYPizzaIngredientFactory();
    }

    // лень готовить что-то кроме сырной пиццы
    createPizza(type) {
        let pizza = null;
        if (type === 'cheese') {
            pizza = new CheesePizza({
                ingredientFactory: this._ingredientFactory
            });
            pizza.setDescription('NY style cheese pizza');
        }
        return pizza;
    }

}

// класс принимающий заказы на изготовление пиццы в Chicago style
class ChicagoStylePizzaStore extends PizzaStore {
    constructor() {
        super();
        // теперь ингридиенты нам предоставляет фабрика
        this._ingredientFactory = new ChicagoIngredientFactory();
    }

    // лень готовить что-то кроме сырной пиццы
    createPizza(type) {
        let pizza = null;
        if (type === 'cheese') {
            pizza = new CheesePizza({
                ingredientFactory: this._ingredientFactory
            });
            pizza.setDescription('Chicago style cheese pizza');
        }
        return pizza;
    }

}

module.exports = {
    NYStylePizzaStore: NYStylePizzaStore,
    ChicagoStylePizzaStore: ChicagoStylePizzaStore
};
