#!/usr/bin/env node

import { startGame } from '../src/startGame.js'
import { calc, rules } from '../src/games/calc.js'

startGame(calc, rules)
