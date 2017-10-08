// код для тестирования нашего магазина и фабрики
let PizzaStore = require('./pizzaStore');
let SimplePizzaFactory = require('./simplePizzaFactory');

// создаем магазин который раюотает с определенной фабрикой по производству пиццы
let pizzaStore = new PizzaStore({
    factory : new SimplePizzaFactory()
});


// делаем 2 разных заказа
let order1 = pizzaStore.orderPizza('cheese');
let order2 = pizzaStore.orderPizza('pepperoni');

