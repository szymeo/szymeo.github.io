import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Draw {
    widget: any;
}

export function com_draw(widget: any) {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Draw;
        game[Get.Draw][entity] = { widget } as Draw;
    };
}