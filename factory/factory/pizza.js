// абстрактный класс для вкуcной пиццы
class Pizza{
    constructor(){
        this._description = 'Pizza';
    }

    // базовые реализации методов, которые характерны для любой пиццы
    prepare(){
        console.log(this._description + ' is preparing...');
    }

    bake(){
        console.log(this._description + ' is baking...');
    }

    cut(){
        console.log(this._description + ' is cutting...');
    }

    box(){
        console.log(this._description + ' is packing...');
    }

}

// вкусная пицца с сыром в NY style
class NYStyleCheesePizza extends Pizza{
    constructor(){
        super();
        this._description = 'NY Style Cheese pizza';
    }
}

// вкусная пицца с сыром в Chicago style
class ChicagoStyleCheesePizza extends Pizza{
    constructor(){
        super();
        this._description = 'Chicago Style Cheese pizza';
    }

    cut(){
        console.log(this._description + ' is cutting into square slices...');
    }
}

module.exports = {
    Pizza : Pizza,
    NYStyleCheesePizza : NYStyleCheesePizza,
    ChicagoStyleCheesePizza : ChicagoStyleCheesePizza
};