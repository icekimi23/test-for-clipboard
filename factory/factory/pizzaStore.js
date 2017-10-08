let ChicagoStyleCheesePizza = require('./pizza').ChicagoStyleCheesePizza;
let NYStyleCheesePizza = require('./pizza').NYStyleCheesePizza;
let Pizza = require('./pizza').Pizza;


// абстрактный класс принимающий заказы на изготовление пиццы
class PizzaStore{
    constructor(){
    }

    orderPizza(type){
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
    createPizza(){

    }

}

// класс принимающий заказы на изготовление пиццы в NY style
class NYStylePizzaStore extends PizzaStore{
    constructor(){
        super();
    }

    createPizza(type){
        let pizza = null;
        if (type === 'cheese') {
            pizza = new NYStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new NYStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new NYStyleClamPizza();
        }
        return pizza;
    }

}

// класс принимающий заказы на изготовление пиццы в Chicago style
class ChicagoStylePizzaStore extends PizzaStore{
    constructor(){
        super();
    }

    createPizza(type){
        let pizza = null;
        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        }
        return pizza;
    }

}

module.exports = {
    NYStylePizzaStore : NYStylePizzaStore,
    ChicagoStylePizzaStore : ChicagoStylePizzaStore
};
