import { Game } from './Game';
import { ManagePlayers } from './ManagePlayers';
import { CalculateScore } from './CalculateScore';

export const createGameFactory = (playerManager: ManagePlayers, calculateScore: CalculateScore) =>
  (playerOneName: string, playerTwoName: string): Game => {
    let playerOne = playerManager.createPlayer(playerOneName);
    let playerTwo = playerManager.createPlayer(playerTwoName);

    const wonPoint = (playerName: string): void => {
      if (playerManager.hasName(playerName, playerOne)) {
        playerOne = playerManager.incrementPoints(playerOne);
      }
      if (playerManager.hasName(playerName, playerTwo)) {
        playerTwo = playerManager.incrementPoints(playerTwo);
      }
    };

    const getScore = (): string =>
      calculateScore(playerManager.getPoints(playerOne), playerManager.getPoints(playerTwo));

    return {
      wonPoint,
      getScore
    };
  };
