import { Get, Has } from '../components/com_index';
import { Entity, Game } from '../game';
import { Keys } from '../typings';

const QUERY = Has.Movement;

export function sys_movement(game: Game, delta: number) {
    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    const transform = game[Get.Transform][entity];
    const movement = game[Get.Movement][entity];
    const collision = game[Get.Collision][entity];

    movement.velocity = game.movementSpeed;

    const wKeyPressed = game.input[Keys.W];
    const aKeyPressed = game.input[Keys.A];
    const sKeyPressed = game.input[Keys.S];
    const dKeyPressed = game.input[Keys.D];

    if (wKeyPressed && !collision.top) {
        transform.y -= movement.velocity;
    }
    if (aKeyPressed && !collision.left) {
        transform.x -= movement.velocity;
    }
    if (sKeyPressed && !collision.bottom) {
        transform.y += movement.velocity;
    }
    if (dKeyPressed && !collision.right) {
        transform.x += movement.velocity;
    }
}