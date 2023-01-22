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
  if (!game.walls[y_idx] || !game.walls[y_idx][x_idx]) {
    return;
  }
  const [topWall, rightWall, bottomWall, leftWall] = game.walls[y_idx][x_idx];
  const cellXY = get_cell_xy(x_idx, y_idx);

  if (!game.wallsCollisionEnabled) {
    collision.top = false;
    collision.right = false;
    collision.bottom = false;
    collision.left = false;
    return;
  }

  let topCollision = transform.y < cellXY.y - 1;
  let rightCollision =
    transform.x + dimensions.width >
    cellXY.x + MAZE_CELL_SIZE - MAZE_WALL_WIDTH + 1;
  let bottomCollision =
    transform.y + dimensions.height >
    cellXY.y + MAZE_CELL_SIZE - MAZE_WALL_WIDTH + 1;
  let leftCollision = transform.x < cellXY.x - 1;

  let edgeTopRightCollision = 0;
  let edgeTopLeftCollision = 0;
  let edgeBottomRightCollision = 0;
  let edgeBottomLeftCollision = 0;

  if (topCollision && rightCollision) {
    const edgeRightWall = game.walls[y_idx - 1][x_idx][1];
    const edgeTopWall = game.walls[y_idx][x_idx + 1][0];
    edgeTopRightCollision = edgeRightWall || edgeTopWall;
  }

  if (topCollision && leftCollision) {
    const edgeLeftWall = game.walls[y_idx - 1][x_idx][3];
    const edgeTopWall = game.walls[y_idx][x_idx - 1][0];
    edgeTopLeftCollision = edgeLeftWall || edgeLeftWall || edgeTopWall;
  }

  if (bottomCollision && rightCollision) {
    const edgeRightWall = game.walls[y_idx + 1][x_idx][1];
    const edgeBottomWall = game.walls[y_idx][x_idx + 1][2];
    edgeBottomRightCollision = edgeBottomWall || edgeRightWall;
  }

  if (bottomCollision && leftCollision) {
    const edgeLeftWall = game.walls[y_idx + 1][x_idx][3];
    const edgeBottomWall = game.walls[y_idx][x_idx - 1][2];
    edgeBottomLeftCollision = edgeBottomWall || edgeLeftWall;
  }

  collision.top =
    !!(topWall || edgeTopLeftCollision || edgeTopRightCollision) &&
    transform.y < cellXY.y;
  collision.right =
    !!(rightWall || edgeTopRightCollision || edgeBottomRightCollision) &&
    transform.x + dimensions.width >
      cellXY.x + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
  collision.bottom =
    !!(bottomWall || edgeBottomRightCollision || edgeBottomLeftCollision) &&
    transform.y + dimensions.height >
      cellXY.y + MAZE_CELL_SIZE - MAZE_WALL_WIDTH;
  collision.left =
    !!(leftWall || edgeTopLeftCollision || edgeBottomLeftCollision) &&
    transform.x < cellXY.x;
}