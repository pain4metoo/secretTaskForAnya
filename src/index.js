import "./scss/style.scss";
import { VigenereCipheringMachine } from "./js/vigenere";

const p = new VigenereCipheringMachine('');

const PAS = p.decrypt('JGUGELWUGLQTLMJGEGOBIUICIPQCNSPPGKXKUGK', 'sdkfnsdkfnksdkfsdkfweobweuiogbwregubrwesofsdjlnfsdjof');

console.log(PAS)