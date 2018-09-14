import { TennisGame } from './TennisGame';
import { PlayerService } from './PlayerService';
import { CalculateScore } from './CalculateScore';

export const createGameFactory = (playerService: PlayerService, calculateScore: CalculateScore) =>
  (playerOneName: string, playerTwoName: string): TennisGame => {
    let playerOne = playerService.createPlayer(playerOneName);
    let playerTwo = playerService.createPlayer(playerTwoName);

    const wonPoint = (playerName: string): void => {
      if (playerService.hasName(playerName, playerOne)) {
        playerOne = playerService.incrementPoints(playerOne);
      }
      if (playerService.hasName(playerName, playerTwo)) {
        playerTwo = playerService.incrementPoints(playerTwo);
      }
    };

    const getScore = (): string =>
      calculateScore(playerService.getPoints(playerOne), playerService.getPoints(playerTwo));

    return {
      wonPoint,
      getScore
    };
  };
