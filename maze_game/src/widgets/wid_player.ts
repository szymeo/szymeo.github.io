import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_player(game: Game, entity: Entity): void {
    const dimensions = game[Get.Dimensions][entity];
    const transform = game[Get.Transform][entity];

    game.game2DContext.fillStyle = '#FF4081';
    game.game2DContext.beginPath();
    game.game2DContext.arc(transform.x + dimensions.width / 2 + 1, transform.y + dimensions.height / 2 + 1, 7, 0, 360, false);
    game.game2DContext.fill();
}