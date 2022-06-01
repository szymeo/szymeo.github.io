import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export const DEFAULT_VELOCITY = 1;

export interface Movement {
    x: number;
    y: number;
    velocity: number;
}

export function com_movement() {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Movement;
        game[Get.Movement][entity] = { x: 0, y: 0, velocity: DEFAULT_VELOCITY } as Movement;
    };
}
