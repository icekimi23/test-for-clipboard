// абстрактный класс для вкуcной пиццы
class Pizza {
    constructor() {
        this._description = 'Pizza';
        this._dough = null;
        this._sauce = null;
        this._cheese = null;
    }

    // базовые реализации методов, которые характерны для любой пиццы

    // метод стал абстрактным, в нем будут собираться ингридиенты для приготовления пиццы, которые будут производиться фабриками ингридиентов
    prepare() {

    }

    bake() {
        console.log(this._description + ' is baking...');
    }

    cut() {
        console.log(this._description + ' is cutting...');
    }

    box() {
        console.log(this._description + ' is packing...');
    }

    setDescription(description) {
        this._description = description;
    }

    getDescription() {
        return this._description;
    }

}

// всесто сырных пиц отдельно для NY и Chicago, пицца теперь одна он с разными фабриками ингридиентов
class CheesePizza extends Pizza {
    constructor(options) {
        super();
        this._description = 'Cheese pizza';
        this._ingredientFactory = options.ingredientFactory;
    }

    prepare() {
        console.log('Preparing ' + this._description + '...');
        // ингридиенты нам предоставляет фабрика
        this._dough = this._ingredientFactory.createDough();
        this._sauce = this._ingredientFactory.createSauce();
        this._cheese = this._ingredientFactory.createCheese();
    }
}

module.exports = {
    Pizza: Pizza,
    CheesePizza: CheesePizza
};