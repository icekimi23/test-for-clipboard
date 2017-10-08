/*
    Паттерн "Фабричный метод" определяет интерфейс создания объекта, но позволяет субклассам выбрать разновидность
    создаваемого экземпляра. Таким образом, Фабричный метод делегирует операцию создания экзепляра субклассам.
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

