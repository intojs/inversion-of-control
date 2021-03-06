import { ManagePlayers } from '../gameplay/ManagePlayers';
import { Player } from '../gameplay/Player';

const createPlayer = (name: string, points?: number): Player => ({name, points: points || 0});

const getName = (player: Player): string => player.name;

const getPoints = (player: Player): number => player.points;

const hasName = (name: string, player: Player): boolean => name === player.name;

const incrementPoints = (player: Player): Player => ({...player, points: player.points + 1});

const PlayerManager: ManagePlayers = {
  createPlayer,
  getName,
  getPoints,
  hasName,
  incrementPoints
};

export { PlayerManager };
