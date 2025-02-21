import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Transform {
    x: number;
    y: number;
}

export function com_transform(coords: { x: number, y: number }) {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Transform;
        game[Get.Transform][entity] = { ...coords } as Transform;
    };
}