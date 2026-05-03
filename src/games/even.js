import { isEven } from '../helpers/isEven.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const even = () => {
  const rusle = (`Answer "yes" if the number is even, otherwise answer "no".`)
  const questionGame = getRandomInt(1, 10)
  const answerGame = isEven(questionGame)

  return { rusle, questionGame, answerGame }
}

export { even }
