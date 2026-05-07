#!/usr/bin/env node

import { startGame } from '../src/startGame.js'
import { progression, rules } from '../src/games/progression.js'

startGame(progression, rules)
