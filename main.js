import {M3} from './enigma_class.js';
import {Wheel} from './wheel_class.js';


// create Wheel instances for the different types of wheel

const wI    = new Wheel('wI', 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
const wII   = new Wheel('wII', 'AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E');
const wIII  = new Wheel('wIII', 'BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
const wIV   = new Wheel('wIV', 'ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
const wV    = new Wheel('wV', 'VZBRGITYUPSDNHLXAWMJQOFECK', 'Z');
const wVI   = new Wheel('wVI', 'JPGVOUMFYQBENHZRDKASXLICTW', 'ZM');
const wVII  = new Wheel('wVII', 'NZJHGRCXMYSWBOUFAIVLPEKQDT', 'ZM');
const wVIII = new Wheel('wVIII', 'FKQHTLXOCBJSPDZRAMEWNIUYGV', 'ZM');

// UKWs do not have turnover notches. Provide empty string.
// Note that UKWs do not move during use, and can only be inserted in one
// position.
const ukw_B = new Wheel('UKW B', 'YRUHQSLDPXNGOKMIEBFZCWVJAT', '');
const ukw_C = new Wheel('UKW C', 'FVPJIAOYEDRZXWGCTKUQSBNMHL', '');

// set up enigma machine

let m3 = new M3({stecker: ['AB', 'CD']});

m3.insertWheel(0, ukw_B);
m3.insertWheel(1, wI);
m3.insertWheel(2, wII);
m3.insertWheel(3, wIII);

const inputMessage = 'AB';

console.log(inputMessage);

let outputMessage = "";

for (let i=0; i < inputMessage.length; i++) {
    let char = inputMessage[i];
    char = m3.encipher(char);
    outputMessage = outputMessage + char;
}

console.log(outputMessage);


