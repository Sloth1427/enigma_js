import {M3} from './enigma_class.js';
import {Wheel} from './wheel_class.js';


// create Wheel instances for the different types of wheel

const wI    = new Wheel('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
const wII   = new Wheel('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'E');
const wIII  = new Wheel('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
const wIV   = new Wheel('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
const wV    = new Wheel('VZBRGITYUPSDNHLXAWMJQOFECK', 'Z');
const wVI   = new Wheel('JPGVOUMFYQBENHZRDKASXLICTW', 'ZM');
const wVII  = new Wheel('NZJHGRCXMYSWBOUFAIVLPEKQDT', 'ZM');
const wVIII = new Wheel('FKQHTLXOCBJSPDZRAMEWNIUYGV', 'ZM');

//  UKWs do not have turnover notches. Provide empty string.
ukw_B = new Wheel('YRUHQSLDPXNGOKMIEBFZCWVJAT', '')
ukw_C = new Wheel('FVPJIAOYEDRZXWGCTKUQSBNMHL', '')

let m3 = new M3({});

console.log(m3.wheels);

// m3.insertWheel(1, 'test');
m3.insertWheel(3, wI);

console.log(m3.wheels);