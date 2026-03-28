#!/usr/bin/env node

import runGame from '../src/index.js'
import calcGame from '../src/games/calc.js'

runGame(calcGame.gameDescription, calcGame.generateRound)
