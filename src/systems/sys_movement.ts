import { Get, Has } from '../components/com_index';
import { Entity, Game } from '../game';
import { Keys } from '../types';

const QUERY = Has.Movement;

export function sys_movement(game: Game, delta: number) {
    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    const movement = game[Get.Movement][entity];
    const wKeyPressed = game.input[Keys.W];
    const aKeyPressed = game.input[Keys.A];
    const sKeyPressed = game.input[Keys.S];
    const dKeyPressed = game.input[Keys.D];

    if (wKeyPressed) {
        movement.y -= 1;
    }

    if (aKeyPressed) {
        movement.x -= 1;
    }

    if (sKeyPressed) {
        movement.y += 1;
    }

    if (dKeyPressed) {
        movement.x += 1;
    }
}