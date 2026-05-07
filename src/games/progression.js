import { getProgressionNumbers } from '../helpers/getProgressionNumbers.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const rules = (`What number is missing in the progression?`)

const progression = () => {
  const start = getRandomInt(0, 5)
  const length = getRandomInt(5, 10)
  const step = getRandomInt(2, 5)

  let sequence = getProgressionNumbers(start, length, step)
  const hiddenIndex = sequence[getRandomInt(0, sequence.length - 1)]

  sequence = sequence.join(' ').replace(hiddenIndex, '..')

  const questionGame = sequence
  const answerGame = `${hiddenIndex}`

  return { questionGame, answerGame }
}

export { progression, rules }
