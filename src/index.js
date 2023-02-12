import { App } from "./js/app";
import { pas1 } from "./js/pas1";
import "./scss/style.scss";

const input = document.querySelector('.pas_inp');
const btn = document.querySelector('.pas_btn');

btn.addEventListener('click', () => {
    if (input.value === pas1()) {
        document.querySelector('.pas').remove();
        new App(document.querySelector('.wrapper'), 'div', 'quest');
    } else {
    }
})