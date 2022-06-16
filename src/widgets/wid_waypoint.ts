import { Get } from '../components/com_index';
import { Entity, Game } from '../game';
import { rounded_rect } from '../utils/rounded_rect';

export function wid_waypoint(game: Game, entity: Entity): void {
    const dimensions = game[Get.Dimensions][entity];
    const transform = game[Get.Transform][entity];

    game.game2DContext.fillStyle = "#18FFFF";
    rounded_rect(
        game.game2DContext,
        transform.x,
        transform.y,
        dimensions.width,
        dimensions.height,
        5,
        true,
        false,
    );
}