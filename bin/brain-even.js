#!/usr/bin/env node

import runGame from '../src/index.js';
import { evenGame } from '../src/cli.js';

runGame(evenGame.gameDescription, evenGame.generateRound);