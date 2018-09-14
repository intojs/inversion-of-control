import { createGame } from './game/createGame';

const game = createGame('player1', 'player2');

game.wonPoint('player1');

game.wonPoint('player1');

game.wonPoint('player2');

console.log(game.getScore()); // Thirty-Fifteen

game.wonPoint('player2');

game.wonPoint('player2');

game.wonPoint('player2');

console.log(game.getScore()); // Win for player2
