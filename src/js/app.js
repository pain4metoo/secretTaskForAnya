import { generateLogicGame } from "./gameLogic";

const { default: Control } = require("./control");

export class App extends Control {
    constructor(parentNode) {
        super(parentNode, 'div', 'quest');
        const questInner = new Control(this.node, 'div', 'quest_inner', '');
        const questTextBlock = new Control(questInner.node, 'div', 'quest_inner_text');
        const questText = new Control(questTextBlock.node, 'p', 'quest_text', 'text');
        const questCounter = new Control(questTextBlock.node, 'p', 'quest_text quest_count', '0 / 20');
        for (let i = 0; i < 5; i++) {
            const questBtn = new Control(questInner.node, 'div', 'quest_answer', 'answer');
        }
        generateLogicGame()

        const audioText = new Control(this.node, 'p', 'audio_text', 'Прослушай аудио перед началом')
        const audio = new Control(this.node, 'audio', 'audio');
        const music = new Control(audio.node, 'source');
        music.node.setAttribute('src', './mus.mp3');
        audio.node.setAttribute('controls', 'controls')

    }
}