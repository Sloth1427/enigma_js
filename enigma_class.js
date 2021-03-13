
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
            throw 'Error in M3.insertWheel: Wheel position does not exist';
        }
        // to do: add check for if wheel is already in machine

        // to do: add check that UKWs and ONLY UKWs go in position 0


        try {
            this.wheels[position] = wheel;
        } catch (e) {
            console.error(e);
        }
    }

    removeWheel(position) {

        if ((position < 0) || (position >= this.wheels.length)) {
            throw 'Error in M3.removeWheel(): Wheel position does not exist';
        }

        try {
            this.wheels[position] = null;
        } catch (e) {
            console.error(e);
        }
    }

    setWheelPosition(wheelPosition, firstLetter) {
            /**
            * Rotates specified wheel until firstLetter == Wheel.outer[0].
            * Used to set up the M3 machine before use. UKWs can not be set in
            * multiple positions.
            */
        if (typeof firstLetter != 'string') {
            throw `Error in M3.setWheelPosition(): Input must be a string, not ${typeof firstLetter} `;
        } else if (firstLetter.length != 1){
            throw `Error in M3.setWheelPosition(): Input string must be of length 1, not ${firstLetter.length} `;
        } else if ((wheelPosition < 0) || (wheelPosition >= this.wheels.length)) {
            throw 'Error in M3.setWheelPosition(): Wheel position does not exist';
        } else if ((this.wheels[wheelPosition].name == 'UKW B') || (this.wheels[wheelPosition].name == 'UKW C')) {
            throw 'Error in M3.setWheelPosition(): UKWs can not be set in different positions';
        }


        try {
            while (this.wheels[wheelPosition].outer[0] != firstLetter) {
                this.wheels[wheelPosition].rotate();
            }
        } catch(e) {
            console.error(e);
        }
    }

    // this should be a private function...
    incrementWheels() {
        /**
         * Rotates right-most wheel (wheels[3]) my one increment, and any
         * wheels to the left if dictated by turnover notches. Note: UKWs do
         * not rotate!
         * 
         * Wheels get incremented before a character is enciphered.
         */

        // the right-most wheel always rotates
        this.wheels[3].rotate();

            if (this.wheels[3].turnOverNotch.includes(this.wheels[3].outer[0])) {
                this.wheels[2].rotate();
                console.log('notch of wheel 3 triggered rotation of wheel 2');
                
                if (this.wheels[2].turnOverNotch.includes(this.wheels[2].outer[0])) {
                    this.wheels[1].rotate();
                    console.log('notch of wheel 2 triggered rotation of wheel 1');
                }
            }

    }

    encipher(char) {
        console.log('enciphering', char);
    }

};


