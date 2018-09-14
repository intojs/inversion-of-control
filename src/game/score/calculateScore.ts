import { CalculateScore } from '../gameplay/CalculateScore';

const pointSynonyms = ['Love', 'Fifteen', 'Thirty', 'Forty'];

const getPointSynonym = (point: number) => pointSynonyms[point];

const pointsAreEqual = (playerOnePoints: number, playerTwoPoints: number) => playerOnePoints === playerTwoPoints;

const isAll = (playerOnePoints: number, playerTwoPoints: number) => {
  return pointsAreEqual(playerOnePoints, playerTwoPoints) && playerOnePoints < 3;
};

const isDeuce = (playerOnePoints: number, playerTwoPoints: number) => {
  return pointsAreEqual(playerOnePoints, playerTwoPoints) &&
    playerOnePoints >= 3 &&
    playerTwoPoints >= 3;
};

const advantagePlayerOne = (playerOnePoints: number, playerTwoPoints: number): boolean => {
  return playerOnePoints >= 4 &&
    playerOnePoints - playerTwoPoints === 1;
};

const advantagePlayerTwo = (playerOnePoints: number, playerTwoPoints: number): boolean => {
  return playerTwoPoints >= 4 &&
    playerTwoPoints - playerOnePoints === 1;
};

const playerOneWon = (playerOnePoints: number, playerTwoPoints: number): boolean => {
  return playerOnePoints >= 4 &&
    playerOnePoints - playerTwoPoints >= 2;
};

const playerTwoWon = (playerOnePoints: number, playerTwoPoints: number): boolean => {
  return playerTwoPoints >= 4 &&
    playerTwoPoints - playerOnePoints >= 2;
};

export const calculateScore: CalculateScore = (playerOnePoints: number, playerTwoPoints: number): string => {
  if (isAll(playerOnePoints, playerTwoPoints)) {
    return `${getPointSynonym(playerOnePoints)}-All`;
  }
  if (isDeuce(playerOnePoints, playerTwoPoints)) {
    return 'Deuce';
  }
  if (advantagePlayerOne(playerOnePoints, playerTwoPoints)) {
    return 'Advantage player1';
  }
  if (advantagePlayerTwo(playerOnePoints, playerTwoPoints)) {
    return 'Advantage player2';
  }
  if (playerOneWon(playerOnePoints, playerTwoPoints)) {
    return 'Win for player1';
  }
  if (playerTwoWon(playerOnePoints, playerTwoPoints)) {
    return 'Win for player2';
  }
  return `${getPointSynonym(playerOnePoints)}-${getPointSynonym(playerTwoPoints)}`;
};
