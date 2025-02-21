import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export const DEFAULT_VELOCITY = 1;

export interface Movement {
    velocity: number;
}

export function com_movement() {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Movement;
        game[Get.Movement][entity] = { velocity: DEFAULT_VELOCITY } as Movement;
    };
}
