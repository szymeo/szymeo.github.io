import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_player(game: Game, entity: Entity, x: number, y: number) {
    const dimensions = game[Get.Dimensions][entity];
    const movement = game[Get.Movement][entity];

    game.game2DContext.fillStyle = "#00acc1";
    game.game2DContext.fillRect(
        x - (dimensions.width / 2) + movement.x,
        y - (dimensions.height / 2) + movement.y,
        dimensions.width,
        dimensions.height,
    );
}