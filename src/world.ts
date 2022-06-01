import { com_dimensions } from './components/com_dimensions';
import { com_draw } from './components/com_draw';
import { com_movement } from './components/com_movement';
import { Game } from './game';
import { wid_player } from './widgets/wid_player';

export function world(game: Game): void {
    game.addEntity({
        coords: {
            x: game.width / 2,
            y: game.height / 2,
        },
        components: [
            com_draw(wid_player),
            com_dimensions(25, 25),
            com_movement(),
        ],
    });
}