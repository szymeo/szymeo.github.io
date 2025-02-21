import { MAZE_CELL_SIZE, MAZE_WALL_WIDTH } from '../constants';

export function get_cell_xy(xIdx: number, yIdx: number) {
    return {
        x: xIdx * MAZE_CELL_SIZE + (MAZE_WALL_WIDTH * xIdx),
        y: yIdx * MAZE_CELL_SIZE + (MAZE_WALL_WIDTH * yIdx),
    };
}