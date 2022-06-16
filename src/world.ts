import { com_collision } from './components/com_collision';
import { com_collision_effect } from './components/com_collision_effect';
import { com_dimensions } from './components/com_dimensions';
import { com_draw } from './components/com_draw';
import { com_movement } from './components/com_movement';
import {
    MAZE_CELL_SIZE,
    MAZE_CELLS_HORIZONTAL,
    MAZE_CELLS_VERTICAL,
    MAZE_WALL_WIDTH,
    PLAYER_SIZE,
    PROJECTS_COUNT,
    WAYPOINT_SIZE,
} from './constants';
import { Game } from './game';
import { draw_maze } from './utils/draw_maze';
import { unique_random_array } from './utils/unique_random_array';
import { wid_player } from './widgets/wid_player';
import { wid_waypoint } from './widgets/wid_waypoint';
import { wid_waypoint_colliding } from './widgets/wid_waypoint_colliding';

export function world(game: Game): void {
    draw_maze(game);
    add_waypoints(game);
    add_player(game);
}

function add_waypoints(game: Game): void {
    const xCoords = unique_random_array(MAZE_CELLS_HORIZONTAL - 1, PROJECTS_COUNT);
    const yCoords = unique_random_array(MAZE_CELLS_VERTICAL - 1, PROJECTS_COUNT);

    xCoords.map((xCoord, i) => [xCoord, yCoords[i]])
        .forEach(([xIdx, yIdx]) => {
            const waypointX = xIdx * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + MAZE_CELL_SIZE / 2 - WAYPOINT_SIZE / 2;
            const waypointY = yIdx * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + MAZE_CELL_SIZE / 2 - WAYPOINT_SIZE / 2;

            game.waypointCoords.push([waypointX, waypointY]);
            game.addEntity({
                coords: {
                    x: waypointX,
                    y: waypointY,
                },
                components: [
                    com_draw(wid_waypoint),
                    com_dimensions(WAYPOINT_SIZE, WAYPOINT_SIZE),
                    com_collision(),
                ],
            });
        });
}

function add_player(game: Game): void {
    game.addEntity({
        coords: {
            x: game.width / 2 - PLAYER_SIZE / 2,
            y: game.height / 2 - PLAYER_SIZE / 2,
        },
        components: [
            com_draw(wid_player),
            com_dimensions(PLAYER_SIZE, PLAYER_SIZE),
            com_movement(),
            com_collision(),
            com_collision_effect(wid_waypoint_colliding),
        ],
    });
}