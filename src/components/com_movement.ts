import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Movement {
    x: number;
    y: number;
}

export function com_movement() {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Movement;
        game[Get.Movement][entity] = { x: 0, y: 0 } as Movement;
    };
}
