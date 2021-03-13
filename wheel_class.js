
export class Wheel {

    constructor(name, wiring, turnOverNotch) {
        this.name = name;
        this.wiring = wiring;
        this.turnOverNotch = turnOverNotch;
        this.outer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    setRingstellung(setRingstellung) {
        return;
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