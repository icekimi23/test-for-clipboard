// реализация стандартными функциями
let Singleton = (function(){
    let instance;

    function Singleton(){
        if (instance) {
            return instance;
        }

        instance = this;

        Singleton.prototype.test = function(){
            console.log('test');
        }

    }

    return Singleton;

})();

let singleton = new Singleton();
singleton.test();

let singleton2 = new Singleton();
console.log(singleton === singleton2);

