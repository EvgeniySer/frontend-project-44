#!/usr/bin/env node

import runGame from '../src/index.js';
import { calcGame } from '../src/cli.js';

runGame(calcGame.gameDescription, calcGame.generateRound);