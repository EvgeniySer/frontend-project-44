#!/usr/bin/env node

import runGame from '../src/index.js';
import { gcdGame } from '../src/cli.js';


runGame(gcdGame.gameDescription, gcdGame.generateRound);