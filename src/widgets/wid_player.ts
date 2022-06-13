import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_player(game: Game, entity: Entity, x: number, y: number) {
    const dimensions = game[Get.Dimensions][entity];

    game.game2DContext.fillStyle = "#8e24aa";
    game.game2DContext.fillRect(
        x,
        y,
        dimensions.width,
        dimensions.height,
    );
}