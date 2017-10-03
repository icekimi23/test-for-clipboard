// абстрактный класс для напитков
class Beverage{
    constructor(){
        this.description = 'Unknown beverage';
        this.size = 'S';
    }

    // абстрактный метод
    cost(){

    }

    getDescription(){
        return this.description;
    }

    setSize(size){
        this.size = size;
    }

    getSize(){
        return this.size;
    }

}

// конкретный вид напитка
class Espresso extends Beverage{
    constructor(){
        super();
        // со своим описанием
        this.description = 'Espresso';
    }

    // и стоимостью
    cost(){
        return 1.99;
    }
}

// конкретный вид напитка
class HouseBlend extends Beverage{
    constructor(){
        super();
        // со своим описанием
        this.description = 'House Blend Coffee';
    }

    // и стоимостью
    cost(){
        return 0.99;
    }
}

module.exports = {
    Espresso : Espresso,
    HouseBlend : HouseBlend
};