import { Get, Has } from '../components/com_index';
import { WAYPOINT_SIZE } from '../constants';
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

    collisionEffect.active = game.waypointCoords.some(([waypoint_x, waypoint_y]) => {
        return (
            (
                (transform.x + dimensions.width > waypoint_x && transform.x + dimensions.width < waypoint_x + WAYPOINT_SIZE) ||
                (transform.x < waypoint_x + WAYPOINT_SIZE && transform.x > waypoint_x)
            )
            &&
            (
                (transform.y + dimensions.height > waypoint_y && transform.y + dimensions.height < waypoint_y + WAYPOINT_SIZE) ||
                (transform.y < waypoint_y + WAYPOINT_SIZE && transform.y > waypoint_y)
            )
        );
    });
}