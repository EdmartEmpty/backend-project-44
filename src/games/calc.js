import getRandomInt from '../helpers/gerRandomNumber.js'

const calc = () => {
  const rusle = (`What is the result of the expression?`)

  const arrSing = ['+', '-', '*']
  const randomSing = arrSing[getRandomInt(0, arrSing.length - 1)]
  const fisrtNumber = getRandomInt(1, 10)
  const secondNumber = getRandomInt(1, 10)
  let questionGame = ''
  let answerGame = ''

  switch (randomSing) {
    case '+':
      questionGame = `${fisrtNumber} ${randomSing} ${secondNumber}`
      answerGame = `${fisrtNumber + secondNumber}`
      break
    case '-':
      questionGame = `${fisrtNumber} ${randomSing} ${secondNumber}`
      answerGame = `${fisrtNumber - secondNumber}`
      break
    case '*':
      questionGame = `${fisrtNumber} ${randomSing} ${secondNumber}`
      answerGame = `${fisrtNumber * secondNumber}`
      break
    default:
      console.error('Ошбика')
      break
  }

  return { rusle, questionGame, answerGame }
}

export { calc }
