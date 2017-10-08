
// класс принимающий заказы на изготовление пиццы
class PizzaStore{
    constructor(options){
        this._factory = options.factory;
    }

    orderPizza(type){
        // конретный вид пиццы запрашиваем у фабрики
        let pizza = this._factory.createPizza(type);
        // дальше процесс отработан и одинаков для каждой пиццы
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        // и наш результат - вкусная пицца
        return pizza;
    }
}

module.exports = PizzaStore;
