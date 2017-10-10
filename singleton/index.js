/*
    Паттерн "Одиночка" гарантирует что класс имеет только один экземпляр, и предоставляет глобальную точку доступа к этому экземпляру.
*/

// реализация на классах ES6
let Singleton = (function(){
    let instance = null;
    class Singleton {
        constructor(){
            if (!instance) instance = this;
            return instance;
        }
        test(){
            console.log('test');
        }
    }
    return Singleton;
})();

let singleton = new Singleton();
singleton.test();

let singleton2 = new Singleton();
console.log(singleton === singleton2);


