import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_waypoint_colliding(game: Game, entity: Entity): void {
    const dimensions = game[Get.Dimensions][entity];
    const transform = game[Get.Transform][entity];

    game.game2DContext.fillStyle = "#297966";
    game.game2DContext.fillRect(
        transform.x - 2,
        transform.y - 2,
        dimensions.width + 5,
        dimensions.height + 5,
    );
}