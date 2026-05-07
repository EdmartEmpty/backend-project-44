#!/usr/bin/env node

import { startGame } from '../src/startGame.js'
import { prime, rules } from '../src/games/prime.js'

startGame(prime, rules)
