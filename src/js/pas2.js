import { VigenereCipheringMachine } from "./vigenere";

const p = new VigenereCipheringMachine('');

export function pas2() {
    return p.decrypt('YUQSFSPIBGZEXDULHWMJVSDWN', 'ITSASECRETPASSWORDMAAAN');
}