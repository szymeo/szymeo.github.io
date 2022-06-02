import { Get, Has } from '../components/com_index';
import { Game } from '../game';

const QUERY = Has.Transform | Has.Draw;

export function sys_draw(game: Game, delta: number) {
    game.game2DContext.clearRect(0, 0, game.width, game.height);

    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            const position = game[Get.Transform][i];

            game[Get.Draw][i].widget(
                game,
                i,
                position.x,
                position.y,
            );
        }
    }
}
