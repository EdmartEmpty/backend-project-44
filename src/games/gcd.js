import getRandomInt from '../helpers/gerRandomNumber.js'
import { nod } from '../helpers/nod.js'

const rules = (`Find the greatest common divisor of given numbers.`)

const gcd = () => {
  const firstNumber = getRandomInt(1, 10)
  const secondNumber = getRandomInt(1, 10)

  const questionGame = `${firstNumber} ${secondNumber}`
  const answerGame = `${nod(firstNumber, secondNumber)}`
  return { questionGame, answerGame }
}

export { gcd, rules }
