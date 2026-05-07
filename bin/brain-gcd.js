#!/usr/bin/env node

import { startGame } from '../src/startGame.js'
import { gcd, rules } from '../src/games/gcd.js'

startGame(gcd, rules)
