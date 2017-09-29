// класс выводящий информацию о некоторых погодных значениях
class CurrentConditionsDisplay {
    constructor(options) {
        // данные о погоде для выводы на экран
        this._temperature = null;
        this._humidity = null;
        // субъект управляющий данными
        this._weatherData = options.weatherData;
        // регистрируемся в качестве наблюдателя
        this._weatherData.registerObserver(this);
    }

    // обновляем данные (метод который должен)
    update(temperature, humidity, pressure) {
        this._temperature = temperature;
        this._humidity = humidity;
        this.display();
    }

    // отображаем текущие данные
    display() {
        console.log('Current temperature: ' + this._temperature + ", current humidity: " + this._humidity);
    }
}

module.exports = CurrentConditionsDisplay;