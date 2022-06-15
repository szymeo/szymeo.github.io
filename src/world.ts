import { com_collision } from './components/com_collision';
import { com_dimensions } from './components/com_dimensions';
import { com_draw } from './components/com_draw';
import { com_movement } from './components/com_movement';
import {
    MAZE_CELL_SIZE,
    MAZE_CELLS_HORIZONTAL,
    MAZE_CELLS_VERTICAL,
    MAZE_WALL_WIDTH,
    PROJECTS_COUNT,
} from './constants';
import { Game } from './game';
import { draw_maze } from './utils/draw_maze';
import { unique_random_array } from './utils/unique_random_array';
import { wid_player } from './widgets/wid_player';
import { wid_waypoint } from './widgets/wid_waypoint';

export function world(game: Game): void {
    add_waypoints(game);
    add_player(game);
    draw_maze(game);
}

function add_waypoints(game: Game): void {
    const xCoords = unique_random_array(MAZE_CELLS_HORIZONTAL - 1, PROJECTS_COUNT);
    const yCoords = unique_random_array(MAZE_CELLS_VERTICAL - 1, PROJECTS_COUNT);

    xCoords.map((xCoord, i) => [xCoord, yCoords[i]])
        .forEach(([xIdx, yIdx]) => {
            const waypointSize = 10;

            game.addEntity({
                coords: {
                    x: xIdx * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + MAZE_CELL_SIZE / 2 - waypointSize / 2,
                    y: yIdx * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + MAZE_CELL_SIZE / 2 - waypointSize / 2,
                },
                components: [
                    com_draw(wid_waypoint),
                    com_dimensions(waypointSize, waypointSize),
                    com_collision(),
                ],
            });
        });
}

function add_player(game: Game): void {
    game.addEntity({
        coords: {
            x: 5,
            y: 5,
        },
        components: [
            com_draw(wid_player),
            com_dimensions(10, 10),
            com_movement(),
            com_collision(),
        ],
    });
}