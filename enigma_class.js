
export class M3 {

    // use EcmaScripts parameter destructuring to allow all params to have
    // defaults, and specify any number of params on construction.
    // https://stackoverflow.com/questions/50715033/javascript-constructor-with-optional-parameters
    
    constructor({wheels = [null, null, null, null]}, stecker = [null]) {
        this.wheels = wheels;
        this.stecker = stecker;
    }

    setWheelPosition(wheel, position) {
        return;
    }

    incrementWheels() {
        return;
    }

    encipher(char) {
        return;
    }

};


