import { Get, Has } from '../components/com_index';
import { MAZE_CELL_SIZE, MAZE_WALL_WIDTH } from '../constants';
import { Entity, Game } from '../game';
import { walls } from '../world';

const QUERY = Has.Movement | Has.Dimensions;

export function sys_collision(game: Game, delta: number) {
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

    const [xIdx, yIdx]: number[] = [
        Math.ceil((transform.x + dimensions.width / 2) / (MAZE_CELL_SIZE + MAZE_WALL_WIDTH)) - 1,
        Math.ceil((transform.y + dimensions.height / 2) / (MAZE_CELL_SIZE + MAZE_WALL_WIDTH)) - 1,
    ];
    const [topWall, rightWall, bottomWall, leftWall] = walls[yIdx][xIdx];
    const cellXY = {
        x: xIdx * MAZE_CELL_SIZE + (MAZE_WALL_WIDTH * xIdx),
        y: yIdx * MAZE_CELL_SIZE + (MAZE_WALL_WIDTH * yIdx),
    };

    collision.top = (topWall !== 0) && transform.y < cellXY.y;
    collision.right = (rightWall !== 0) && transform.x + dimensions.width > cellXY.x + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
    collision.bottom = (bottomWall !== 0) && transform.y + dimensions.height > cellXY.y + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
    collision.left = (leftWall !== 0) && transform.x < cellXY.x;
}