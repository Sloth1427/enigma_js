
export class M3 {

    // use EcmaScripts parameter destructuring to allow all params to have
    // defaults, and specify any number of params on construction.
    // https://stackoverflow.com/questions/50715033/javascript-constructor-with-optional-parameters
    
    constructor({wheels = [null, null, null, null]}, stecker = [null]) {
        this.wheels = wheels;
        this.stecker = stecker;
    }

    insertWheel(position, wheel) {

        // check arguments are valid
        if (wheel.constructor.name != 'Wheel') {
            throw 'Error in M3.insertWheel: Only a Wheel instance can be inserted';
        } else if ((position < 0) || (position >= this.wheels.length)) {
            throw 'Error in M3.insertWheel: Wheel position does not exist'
        }

        try {
            this.wheels[position] = wheel;
        } catch (e) {
            console.error(e);
        }
    }

    removeWheel(position) {

        if ((position < 0) || (position >= this.wheels.length)) {
            throw 'Error in M3.removeWheel: Wheel position does not exist'
        }

        try {
            this.wheels[position] = null;
        } catch (e) {
            console.error(e);
        }
    }

    setWheelPosition(wheel, position) {

    }

    // this should be a private function...
    incrementWheels() {

    }

    encipher(char) {
        console.log('enciphering', char);
    }

};


