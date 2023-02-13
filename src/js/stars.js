import Control from "./control";

export class Stars extends Control {
    constructor(parentNode) {
        super(parentNode, 'div', 'stars');
        new Control(this.node, 'div', 'stars1');
        new Control(this.node, 'div', 'stars2');
        new Control(this.node, 'div', 'stars3');
    }
}