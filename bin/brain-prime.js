#!/usr/bin/env node

import runGame from '../src/index.js';
import { primeGame } from '../src/cli.js';

runGame(primeGame.gameDescription, primeGame.generateRound);