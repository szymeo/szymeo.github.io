import { Get, Has } from '../components/com_index';
import { Entity, Game } from '../game';

const QUERY = Has.Transform | Has.CollisionEffect;

export function sys_collision_effect(game: Game, delta: number) {
    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    const collisionEffect = game[Get.CollisionEffect][entity];

    collisionEffect.active && collisionEffect.widget(
        game,
        entity,
    );
}
