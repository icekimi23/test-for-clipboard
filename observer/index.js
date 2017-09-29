/*
    Паттерн "Наблюдатель" определяет отношение один ко многим таким образом, что при изменении состояния одного объекта
    происходит автоматическое оповещение и обновление зависимых объектов.
 */

const WeatherData = require('./weatherData');
const CurrentConditionsDisplay = require('./conditionsDisplay');

const weatherData = new WeatherData();
const conditionDisplay = new CurrentConditionsDisplay({
    weatherData : weatherData
});

weatherData.setMeasurements(5.8, 80, 720);
weatherData.setMeasurements(6.5, 75, 730);
weatherData.setMeasurements(8.5, 50, 725);



