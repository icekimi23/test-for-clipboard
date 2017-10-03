/*
    Паттерн "Декоратор" динамически наделяет объект новыми возможностями и является гибкой альтернативой
    субклассированию в области расширения функциональности.
 */

const Espresso = require('./beverage').Espresso;
const HouseBlend = require('./beverage').HouseBlend;
const Mocha = require('./condiment').Mocha;
const Soy = require('./condiment').Soy;
const Whip = require('./condiment').Whip;

let espresso = new Espresso();
// декорируем наш кофе
espresso.setSize('L');
espresso = new Mocha(espresso);
espresso = new Soy(espresso);
espresso = new Whip(espresso);

// а тут много шоколада + взбитые сливки
let houseBlend = new HouseBlend();
houseBlend = new Mocha(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Mocha(houseBlend);
houseBlend = new Whip(houseBlend);

console.log((espresso.getDescription() + ' $' + espresso.cost()));
console.log((houseBlend.getDescription() + ' $' + houseBlend.cost()));




