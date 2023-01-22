import { Get, Has } from '../components/com_index';
import { Entity, Game } from '../game';

const QUERY = Has.Dimensions | Has.Collision | Has.CollisionEffect;

export function sys_waypoint_collision(game: Game, delta: number) {
    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    const transform = game[Get.Transform][entity];
    const dimensions = game[Get.Dimensions][entity];
    const collisionEffect = game[Get.CollisionEffect][entity];

    const transformAll = game[Get.Transform].filter((t, index) => index !== entity);
    const dimensionsAll = game[Get.Dimensions].filter((t, index) => index !== entity);

    collisionEffect.active = transformAll.some(({ x, y }, index) => {
        const { width, height } = dimensionsAll[index];

        return (
            ((transform.x + dimensions.width > x && transform.x + dimensions.width < x + width) ||
                (transform.x < x + width && transform.x > x)) &&
            ((transform.y + dimensions.height > y && transform.y + dimensions.height < y + height) ||
                (transform.y < y + height && transform.y > y))
        );
    });
}