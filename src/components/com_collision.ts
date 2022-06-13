import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Collision {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
}

export function com_collision() {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Collision;
        game[Get.Collision][entity] = { top: false, right: false, bottom: false, left: false } as Collision;
    };
}