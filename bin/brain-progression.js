#!/usr/bin/env node

import runGame from '../src/index.js';
import { progressionGame } from '../src/cli.js';

runGame(progressionGame.gameDescription, progressionGame.generateRound);