import readlineSync from 'readline-sync';


const startGame = (game) => {

    let countAnswer = 0;

    const { rusle } = game();

    console.log('Welcome to the Brain Games!')
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`)
    console.log(rusle);

    while (countAnswer < 3) {
        const {questionGame, answerGame} = game()

        console.log(`Question: ${questionGame}`);
        let answer = readlineSync.question('Your answer: ');
        answer = answer.toLowerCase();

        if (answer === answerGame) {
            console.log('Correct!');
            countAnswer += 1;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${answerGame}. Let's try again, ${userName}!`)
            return;
        }

    }

    console.log(`Congratulations, ${userName}!`)

}

export { startGame }

