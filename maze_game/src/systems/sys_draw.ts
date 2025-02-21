import { Get, Has } from '../components/com_index';
import { Entity, Game } from '../game';

const QUERY = Has.Transform | Has.Draw;

export function sys_draw(game: Game, delta: number) {
    game.game2DContext.clearRect(0, 0, game.width, game.height);

    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    game[Get.Draw][entity].widget(
        game,
        entity,
    );
}
