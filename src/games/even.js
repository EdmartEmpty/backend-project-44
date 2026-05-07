import { isEven } from '../helpers/isEven.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const rules = (`Answer "yes" if the number is even, otherwise answer "no".`)

const even = () => {
  const questionGame = getRandomInt(1, 10)
  const answerGame = isEven(questionGame)

  return { questionGame, answerGame }
}

export { even, rules }
