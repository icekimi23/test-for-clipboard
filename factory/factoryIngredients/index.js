/*
    Паттерн "Абстрактная фабрика" предоставляет интерфейс создания семейств взаимосвязанных и взаимозависимых объектов
    без указания их конкретных классов.
*/

// код для тестирования нашего магазина и фабрики
let ChicagoStylePizzaStore = require('./pizzaStore').ChicagoStylePizzaStore;
let NYStylePizzaStore = require('./pizzaStore').NYStylePizzaStore;

// создаем магазин который раюотает с определенной фабрикой по производству пиццы
let chicagoPizzaStore = new ChicagoStylePizzaStore();
let nyPizzaStore = new NYStylePizzaStore();


// делаем 2 одиннаковых заказа, но в разных пиццериях
let order1 = chicagoPizzaStore.orderPizza('cheese');
let order2 = nyPizzaStore.orderPizza('cheese');

