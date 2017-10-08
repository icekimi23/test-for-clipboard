// абстрактный класс для вкуcной пиццы
class Pizza{
    constructor(){
        this._description = 'Pizza';
    }

    // методы, которые характерны для любой пиццы
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

// вкусная пицца с сыром
class CheesePizza extends Pizza{
    constructor(){
        super();
        this._description = 'Cheese pizza';
    }
}

// вкусная пицца с колбаской
class PepperoniPizza extends Pizza{
    constructor(){
        super();
        this._description = 'Pepperoni pizza';
    }
}

// вкусная пицца с морепродуктами
class ClamPizza extends Pizza{
    constructor(){
        super();
        this._description = 'Clam pizza';
    }
}

module.exports = {
    CheesePizza : CheesePizza,
    PepperoniPizza : PepperoniPizza,
    ClamPizza : ClamPizza
};