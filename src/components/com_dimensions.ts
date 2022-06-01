import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Dimensions {
    width: number;
    height: number;
}

export function com_dimensions(width: number, height: number) {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Dimensions;
        game[Get.Dimensions][entity] = { width, height } as Dimensions;
    };
}