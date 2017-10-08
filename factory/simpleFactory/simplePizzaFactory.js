let CheesePizza = require('./pizza').CheesePizza;
let PepperoniPizza = require('./pizza').PepperoniPizza;
let ClamPizza = require('./pizza').ClamPizza;

// класс, предоставляющий нужную пиццу в зависимости от ее типа
class SimplePizzaFactory{
    constructor(){

    }
    // весь код по созданию конкретного вида пиццы инкапсулирован
    createPizza(type){

        let pizza = null;

        if (type === 'cheese') {
            pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new PepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ClamPizza();
        }

        return pizza;

    }
}

module.exports = SimplePizzaFactory;
