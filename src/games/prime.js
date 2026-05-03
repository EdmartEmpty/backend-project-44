import { isPrimeNumber } from '../helpers/isPrimeNumber.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const prime = () => {
  const rusle = (`Answer "yes" if given number is prime. Otherwise answer "no".`)

  const randomNumber = getRandomInt(0, 25)

  const questionGame = `${randomNumber}`
  const answerGame = isPrimeNumber(randomNumber) ? 'yes' : 'no'

  return { rusle, questionGame, answerGame }
}

export { prime }
