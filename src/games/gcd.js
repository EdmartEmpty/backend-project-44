import { nod } from "../helpers/nod.js";
import getRandomInt from "../helpers/gerRandomNumber.js";

const gcd = () => {
    const rusle = (`Find the greatest common divisor of given numbers.`);

    const fisrtNumber = getRandomInt(1, 10);
    const secondNumber = getRandomInt(1, 10); 
    
    const questionGame = `${fisrtNumber} ${secondNumber}`;
    const answerGame = `${nod(fisrtNumber,secondNumber)}`;

    return { rusle, questionGame, answerGame };
}

export { gcd };