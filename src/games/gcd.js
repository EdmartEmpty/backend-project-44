// import { nod } from '../helpers/nod.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const nod = (a, b) => {
  if (b === 0) {
    throw new Error('На ноль делить нельзя')
  }
  else if ((a % b) === 0) {
    return b
  }

  return nod(b, a % b)
}

const rules = (`Find the greatest common divisor of given numbers.`)

const gcd = () => {
  const firstNumber = getRandomInt(1, 10)
  const secondNumber = getRandomInt(1, 10)

  const questionGame = `${firstNumber} ${secondNumber}`
  const answerGame = `${nod(firstNumber, secondNumber)}`

  return { questionGame, answerGame }
}

export { gcd, rules }
