import readlineSync from 'readline-sync'
import { getWellcome } from './helpers/cli.js'

const startGame = (game, rules) => {
  let countAnswer = 0

  const userName = getWellcome()
  console.log(rules)

  while (countAnswer < 3) {
    const { questionGame, answerGame } = game()

    console.log(`Question: ${questionGame}`)
    let answer = readlineSync.question('Your answer: ')
    answer = answer.toLowerCase()

    if (answer === answerGame) {
      console.log('Correct!')
      countAnswer += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerGame}. Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export { startGame }
