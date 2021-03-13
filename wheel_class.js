
export class Wheel {

    constructor(name, wiring, turnOverNotch) {
        this.name = name;
        this.wiring = wiring;
        this.turnOverNotch = turnOverNotch;
        this.outer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    setRingstellung(ringstellung) {
        // method to set the ringstellung, i.e. rotation
        // of inner ring relative to outer. Not exactly sure how the usual notation
        // translates to an offset, so the below is a first guess. Puts the letter
        // specified (ringstellung) of outer to first position, without rotating
        // wiring.

        if (typeof ringstellung != 'string') {
            throw `Error in setRingstellung(): Input must be a string, not ${typeof ringstellung} `;
        } else if (ringstellung.length != 1){
            throw `Error in setRingstellung(): Input string must be of length 1, not ${ringstellung.length} `;
        }

        try {
            while (this.outer[0] != ringstellung) {
                this.outer = rotateString(this.outer);
            }
        } catch(e) {
            console.error(e);
        }

    }

    rotate() {
        this.wiring = rotateString(this.wiring);
        this.outer = rotateString(this.outer);
    }

}


function rotateString(string, rightToleft=false) {
    /**
    * Returns string rotated either one position to left or right. Left to
    * right is default.
    */

    if (typeof string != 'string') {
        throw `Error in rotateString(): Input must be a string, not ${typeof string} `;
    }

    try {
        
        if (string.length <= 1) return string;
        
        if (rightToleft == false) {
            let last_char = string.slice(string.length -1);
            let remaining = string.slice(0, string.length -1);
            return last_char + remaining;
        } else {
            let first_char = string.slice(0, 1);
            let remaining = string.slice(1);
            return remaining + first_char;
        }

        
    } catch(e) {
        console.error(e);
    }
}