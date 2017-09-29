// класс, хранящий информацию о погодных данных
class WeatherData {
    constructor() {
        // наблюдатели
        this._observers = [];
        // данные о погоде
        this._temperature = null;
        this._humidity = null;
        this._pressure = null;
    }

    // зарегистрировать нового наблюдателя
    registerObserver(obs) {
        this._observers.push(obs);
    }

    // удалить наблюдателя из списка наблюдателей
    removeObserver(obs) {
        this._observers = this._observers.filter((el) => {
            return el !== obs;
        });
    }

    // оповестить всех наблюдателей вызывая их метод update
    notifyObservers() {
        this._observers.forEach((obs) => {
            obs.update(this._temperature, this._humidity, this._pressure);
        });
    }

    // оповещение наблюдателей о появлении новых данных
    measurementsChanged() {
        this.notifyObservers();
    }

    // установка значений измеряемых величин
    setMeasurements(temperature, humidity, pressure) {
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
        this.measurementsChanged();
    }

}

module.exports = WeatherData;