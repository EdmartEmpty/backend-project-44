#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isEven } from '../src/isEven.js';
import getRandomInt from '../src/getRandonNumber.js';

const getEven = () => {

    let countAnswer = 0;
    
    console.log('Welcome to the Brain Games!')
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`)
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    
    while(countAnswer < 3){    
        let randomNumber = getRandomInt(1, 10);
        
        console.log(`Question: ${randomNumber}`);
        let answer = readlineSync.question('Your answer: ');
        answer = answer.toLowerCase();
        
        if(answer === isEven(randomNumber)){
            console.log('Correct!');
            countAnswer += 1;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(randomNumber)}.
        Let's try again, ${userName}!`)
            return;
        }
            
    }

    console.log(`Congratulations, ${userName}!`)
}

export { getEven };

getEven();