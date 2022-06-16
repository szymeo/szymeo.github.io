import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface CollisionEffect {
    widget: any;
    active: boolean;
}

export function com_collision_effect(widget: any) {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.CollisionEffect;
        game[Get.CollisionEffect][entity] = { widget, active: false } as CollisionEffect;
    };
}