import { Entity, Game } from '../game';
import { Get, Has } from './com_index';

export interface Notification {
    value: string;
}

export function com_notification(value: string) {
    return (game: Game, entity: Entity) => {
        game.entities[entity] |= Has.Notification;
        game[Get.Notification][entity] = { value } as Notification;
    };
}
