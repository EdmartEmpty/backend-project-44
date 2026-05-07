import { startGame } from './src/startGame.js'
import { calc, rules as calcRules } from './src/games/calc.js'
import { even, rules as evenRules } from './src/games/even.js'
import { gcd, rules as gcdRules } from './src/games/gcd.js'
import { prime, rules as primeRules } from './src/games/prime.js'
import { progression, rules as progressionRules } from './src/games/progression.js'
import readlineSync from 'readline-sync'

const enterTheGame = () => {
  const games = ['calc', 'even', 'gcd', 'prime', 'progression']
  const index = readlineSync.keyInSelect(games, 'Choose a game')
  switch (games[index]) {
    case 'calc':
      startGame(calc, calcRules)
      break
    case 'even':
      startGame(even, evenRules)
      break
    case 'gcd':
      startGame(gcd, gcdRules)
      break
    case 'prime':
      startGame(prime, primeRules)
      break
    case 'progression':
      startGame(progression, progressionRules)
      break
    default:
      console.log('Нужно выбрать из списка')
  }
}
export { enterTheGame }
