import { isEven } from "../isEven.js";

const even = () => {

    const rusle = (`Answer "yes" if the number is even, otherwise answer "no".`);
    const questionGame = Math.floor(Math.random() * (10)) + 1;// NOSONAR
    const answerGame = isEven(questionGame);

    return { rusle, questionGame, answerGame };
}

export { even };