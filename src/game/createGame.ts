import { createGameFactory } from './gameplay/createGameFactory';
import { PlayerManager } from './player/PlayerManager';
import { calculateScore } from './score/calculateScore';

export const createGame = createGameFactory(PlayerManager, calculateScore);
