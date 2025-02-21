import { Dimensions } from '../components/com_dimensions';
import { Transform } from '../components/com_transform';
import { MAZE_CELL_SIZE, MAZE_WALL_WIDTH } from '../constants';

export function get_cell_coords(transform: Transform, dimensions: Dimensions) {
    return {
        x_idx: Math.ceil((transform.x + dimensions.width / 2) / (MAZE_CELL_SIZE + MAZE_WALL_WIDTH)) - 1,
        y_idx: Math.ceil((transform.y + dimensions.height / 2) / (MAZE_CELL_SIZE + MAZE_WALL_WIDTH)) - 1,
    };
}