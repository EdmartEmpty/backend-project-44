import { getProgressionNumbers } from '../helpers/getProgressionNumbers.js'
import getRandomInt from '../helpers/gerRandomNumber.js'

const progression = () => {
  const rusle = (`What number is missing in the progression?`)

  const startProgression = getRandomInt(0, 5)
  const lengthProgression = getRandomInt(5, 10)
  const progressionStep = getRandomInt(2, 5)

  let progression = getProgressionNumbers(startProgression, lengthProgression, progressionStep)
  const randomNumberFromProgression = progression[getRandomInt(0, progression.length - 1)]

  progression = progression.join(' ').replace(randomNumberFromProgression, '..')

  const questionGame = progression
  const answerGame = `${randomNumberFromProgression}`

  return { rusle, questionGame, answerGame }
}

export { progression }
