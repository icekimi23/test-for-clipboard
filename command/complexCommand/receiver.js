// ПОЛУЧАТЕЛЬ - объект со своими методами
class Light{
    constructor(){

    }

    on(){
        console.log('Light is on');
    }

    off(){
        console.log('Light is off');
    }
}

// ПОЛУЧАТЕЛЬ - еще один объект со своими методами
class GarageDoor{
    constructor(){

    }

    open(){
        console.log('Garage door is open');
    }

    close(){
        console.log('Garage door is closed');
    }
}

// ПОЛУЧАТЕЛЬ - еще один объект со своими методами
class StereoSystem{
    constructor(){

    }

    off(){
        console.log('Stereo system is off');
    }

    on(){
        console.log('Stereo system is on');
    }

    setCD(){
        console.log('CD is set');
    }

    setVolume(value){
        console.log('Volume value is set to ' + value);
    }
}

module.exports = {
    Light : Light,
    GarageDoor : GarageDoor,
    StereoSystem : StereoSystem
};