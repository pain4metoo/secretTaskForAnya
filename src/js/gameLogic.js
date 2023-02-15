import { data } from "./questData";
import { state } from "./state";

export function generateLogicGame() {
    const quest = document.querySelector('.quest_text');
    const answers = document.querySelectorAll('.quest_answer');
    const counter = document.querySelector('.quest_count');

    let currRandom = randomQuest();

    quest.textContent = data[currRandom].quest;
    Array.from(answers).forEach((el, i) => {
        el.textContent = data[currRandom].answer[i];
        el.onclick = () => {
            if (i === data[currRandom].trueAnswer) {
                document.querySelectorAll('.quest_answer').forEach((el) => {
                    el.style.background = 'green';
                })
                setTimeout(() => {
                    document.querySelectorAll('.quest_answer').forEach((el) => {
                        el.style.background = 'git aqua';
                    })
                    state.counter += 1;
                    counter.textContent = `${state.counter} / 20`;
                    if (state.counter >= 20) {
                        const wrapper = document.querySelector('.wrapper');
                        const gameEnd = document.createElement('div');
                        gameEnd.classList = 'game_end';
                        gameEnd.textContent = 'https://ibb.co/3d8BjVD';
                        wrapper.append(gameEnd);
                        return;
                    }
                    generateLogicGame();
                }, 500);

            } else {
                document.querySelectorAll('.quest_answer').forEach((el) => {
                    el.style.background = 'red';
                })
                setTimeout(() => {
                    location.reload();
                }, 1000)
            }
        }
    })

    function randomQuest() {
        let random = Math.floor(Math.random() * 20);

        if (state.quest.includes(random)) {
            for (let i = 0; i < 20; i++) {
                if (!(state.quest.includes(i))) {
                    state.quest.push(i);
                    return i;
                } else {
                    continue;
                }
            }
        } else {
            state.quest.push(random);
            return random;
        }
    }
}




