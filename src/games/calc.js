import getRandomInt from '../helpers/gerRandomNumber.js'

const rules = (`What is the result of the expression?`)

const calc = () => {
  const arrSign = ['+', '-', '*']
  const randomSign = arrSign[getRandomInt(0, arrSign.length - 1)]
  const fisrtNumber = getRandomInt(1, 10)
  const secondNumber = getRandomInt(1, 10)
  let questionGame = ''
  let answerGame = ''

  switch (randomSign) {
    case '+':
      questionGame = `${fisrtNumber} ${randomSign} ${secondNumber}`
      answerGame = `${fisrtNumber + secondNumber}`
      break
    case '-':
      questionGame = `${fisrtNumber} ${randomSign} ${secondNumber}`
      answerGame = `${fisrtNumber - secondNumber}`
      break
    case '*':
      questionGame = `${fisrtNumber} ${randomSign} ${secondNumber}`
      answerGame = `${fisrtNumber * secondNumber}`
      break
    default:
      console.error('Ошбика')
      break
  }

  return { questionGame, answerGame }
}

export { calc, rules }
