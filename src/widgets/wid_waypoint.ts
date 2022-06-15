import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_waypoint(game: Game, entity: Entity, x: number, y: number): void {
    const dimensions = game[Get.Dimensions][entity];

    game.game2DContext.fillStyle = "#2979ff";
    game.game2DContext.fillRect(
        x,
        y,
        dimensions.width,
        dimensions.height,
    );
}