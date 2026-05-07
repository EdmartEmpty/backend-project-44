import { isPrimeNumber } from '../helpers/isPrimeNumber.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const rules = (`Answer "yes" if given number is prime. Otherwise answer "no".`)

const prime = () => {
  const randomNumber = getRandomInt(0, 25)

  const questionGame = `${randomNumber}`
  const answerGame = isPrimeNumber(randomNumber) ? 'yes' : 'no'

  return { questionGame, answerGame }
}

export { prime, rules }
