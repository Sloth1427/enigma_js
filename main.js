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

//  UKWs do not have turnover notches. Provide empty string.
const ukw_B = new Wheel('ukw B', 'YRUHQSLDPXNGOKMIEBFZCWVJAT', '');
const ukw_C = new Wheel('ukw C', 'FVPJIAOYEDRZXWGCTKUQSBNMHL', '');

let m3 = new M3({});

m3.insertWheel(3, wI);

console.log(m3.wheels);

m3.wheels[3].setRingstellung('E');

console.log(m3.wheels);