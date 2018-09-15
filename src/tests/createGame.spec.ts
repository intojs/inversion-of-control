import { checkAllScores } from './utils';
import { createGame } from '../game/createGame';

describe('TennisGameInterface', function () {
  describe('TennisGame1', function () {
    it('should correctly check all the scores for game 1', function () {
      checkAllScores(() => createGame('player1', 'player2'));
    });
  });

  describe('TennisGame2', function () {
    it('should correctly check all the scores for game 2', function () {
      checkAllScores(() => createGame('player1', 'player2'));
    });
  });

  describe('TennisGame3', function () {
    it('should correctly check all the scores for game 3', function () {
      checkAllScores(() => createGame('player1', 'player2'));
    });
  });
});
