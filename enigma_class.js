
export class M3 {

    // use EcmaScripts parameter destructuring to allow all params to have
    // defaults, and specify any number of params on construction.
    // https://stackoverflow.com/questions/50715033/javascript-constructor-with-optional-parameters
    
    constructor({wheels = [null, null, null, null], stecker = null}) {
        this.wheels = wheels;
        this.steckerConnections = stecker;

        this.steckerbrettDefault = {
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
            'G': 'G',
            'H': 'H',
            'I': 'I',
            'J': 'J',
            'K': 'K',
            'L': 'L',
            'M': 'M',
            'N': 'N',
            'O': 'O',
            'P': 'P',
            'Q': 'Q',
            'R': 'R',
            'S': 'S',
            'T': 'T',
            'U': 'U',
            'V': 'V',
            'W': 'W',
            'X': 'X',
            'Y': 'Y',
            'Z': 'Z'
        };

        this.steckerbrett = this.steckerbrettDefault;

        // update the stecker dictionary
        this.updateSteckerbrett(this.steckerConnections);
    }

    updateSteckerbrett(stecker) {
        // check that stecker is a list of letter pairs or null

        // reset if stecker = null
        if (stecker == null) {
            this.steckerbrett = this.steckerbrettDefault;
        } else {
            console.log(stecker);
            // for each letter pair, update the dict in both directions
            for (let i = 0; i < stecker.length; i++) {
                
                let key1 = stecker[i][0];
                let key2 = stecker[i][1];

                this.steckerbrett[key1] = key2;
                this.steckerbrett[key2] = key1;

            }
        }
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

        const num_letter_dict = {
            'A': 0,
            'B': 1,
            'C': 2,
            'D': 3,
            'E': 4,
            'F': 5,
            'G': 6,
            'H': 7,
            'I': 8,
            'J': 9,
            'K': 10,
            'L': 11,
            'M': 12,
            'N': 13,
            'O': 14,
            'P': 15,
            'Q': 16,
            'R': 17,
            'S': 18,
            'T': 19,
            'U': 20,
            'V': 21,
            'W': 22,
            'X': 23,
            'Y': 24,
            'Z': 25,
             0: 'A',
             1: 'B',
             2: 'C',
             3: 'D',
             4: 'E',
             5: 'F',
             6: 'G',
             7: 'H',
             8: 'I',
             9: 'J',
            10: 'K',
            11: 'L',
            12: 'M',
            13: 'N',
            14: 'O',
            15: 'P',
            16: 'Q',
            17: 'R',
            18: 'S',
            19: 'T',
            20: 'U',
            21: 'V',
            22: 'W',
            23: 'X',
            25: 'Y',
            26: 'Z'
        };

        // increment wheels before enciphering
        this.incrementWheels();

        console.log('enciphering', char);

        // pass char through stecker
        char = this.steckerbrett[char];
        console.log(`Output of steckerbrett: ${char}`);
    
        // pass char through wheels[3]
        char = this.wheels[3].wiring[num_letter_dict[char]]
        console.log(`Output of wheels[3]: ${char}`);

        // pass char through wheels[2]
        char = this.wheels[2].wiring[num_letter_dict[char]]
        console.log(`Output of wheels[2]: ${char}`);

        // pass char through wheels[1]
        char = this.wheels[1].wiring[num_letter_dict[char]]
        console.log(`Output of wheels[1]: ${char}`);

        // pass char through wheels[0] and back towards wheels[1]
        char = this.wheels[0].wiring[num_letter_dict[char]]
        console.log(`Output of UKW wheels[0]: ${char}`);

        // pass char through wheels[1]
        char = num_letter_dict[this.wheels[1].wiring.indexOf(char)]
        console.log(`Output of wheels[1]: ${char}`);

        // pass char through wheels[2]
        char = num_letter_dict[this.wheels[2].wiring.indexOf(char)]
        console.log(`Output of wheels[2]: ${char}`);

        // pass char through wheels[3]
        char = num_letter_dict[this.wheels[3].wiring.indexOf(char)]
        console.log(`Output of wheels[3]: ${char}`);

        // pass char through stecker
        char = this.steckerbrett[char];
        console.log(`Output of steckerbrett: ${char}`);



    }

};


