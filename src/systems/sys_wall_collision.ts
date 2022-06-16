import { Get, Has } from '../components/com_index';
import { MAZE_CELL_SIZE, MAZE_WALL_WIDTH } from '../constants';
import { Entity, Game } from '../game';
import { get_cell_coords } from '../utils/get_cell_coords';
import { get_cell_xy } from '../utils/get_cell_xy';

const QUERY = Has.Transform | Has.Dimensions | Has.Collision;

export function sys_wall_collision(game: Game, delta: number) {
    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            update(game, i);
        }
    }
}

function update(game: Game, entity: Entity): void {
    const transform = game[Get.Transform][entity];
    const dimensions = game[Get.Dimensions][entity];
    const collision = game[Get.Collision][entity];

    const { x_idx, y_idx } = get_cell_coords(transform, dimensions);
    const [topWall, rightWall, bottomWall, leftWall] = game.walls[y_idx][x_idx];
    const cellXY = get_cell_xy(x_idx, y_idx);

    collision.top = (topWall !== 0) && transform.y < cellXY.y;
    collision.right = (rightWall !== 0) && transform.x + dimensions.width > cellXY.x + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
    collision.bottom = (bottomWall !== 0) && transform.y + dimensions.height > cellXY.y + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
    collision.left = (leftWall !== 0) && transform.x < cellXY.x;
}