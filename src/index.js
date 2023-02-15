import { App } from "./js/app";
import { pas1 } from "./js/pas1";
import { Stars } from "./js/stars";
import "./scss/style.scss";


const input = document.querySelector('.pas_inp');
const btn = document.querySelector('.pas_btn');

btn.addEventListener('click', () => {
    if (input.value === pas1()) {
        document.querySelector('.pas').style.background = 'green';
        setTimeout(() => {
            document.querySelector('.pas').remove();
            new App(document.querySelector('.wrapper'), 'div', 'quest');
            new Stars(document.querySelector('.wrapper'));
        }, 1000)

    } else {
        document.querySelector('.pas').style.background = 'red';
        setTimeout(() => {
            document.querySelector('.pas').style.background = 'none';
        }, 1000)
    }

})