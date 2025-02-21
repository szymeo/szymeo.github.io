import {
    CELL_DRAW_DELAY,
    MAZE_CELL_COLOR,
    MAZE_CELL_SIZE,
    MAZE_CELLS_HORIZONTAL,
    MAZE_CELLS_VERTICAL,
    MAZE_WALL_COLOR,
    MAZE_WALL_WIDTH,
    OUTER_WALL_WIDTH,
} from '../constants';
import { Game } from '../game';
import { Direction, DirectionCoords } from '../typings';
import { switch_case } from './switch_case';

export function draw_maze(game: Game): void {
    let CURRENT_X = 0;// width / 2 | 0;
    let CURRENT_Y = 0;//height / 2 | 0;
    let seed = Math.random() * 100000 | 0;
    let random: () => number;
    let route: number[][];
    let ctx: CanvasRenderingContext2D;
    let unvisitedCellsMap: { [key: string]: boolean } = {};
    let offset: number;
    let timer: ReturnType<typeof setTimeout>;

    const randomGen = function (seed: number = performance.now()) {
        return function () {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    };

    const directionsCoordsMap = new Map<Direction, DirectionCoords>([
        [Direction.TOP, [0, -1]],
        [Direction.RIGHT, [1, 0]],
        [Direction.BOTTOM, [0, 1]],
        [Direction.LEFT, [-1, 0]],
    ]);

    const directionsMap = new Map<string, Direction>([
        ['y-1', Direction.TOP],
        ['x1', Direction.RIGHT],
        ['y1', Direction.BOTTOM],
        ['x-1', Direction.LEFT],
    ]);

    function getDirectionFromCoords(coords: DirectionCoords): Direction {
        const [x, y] = coords;
        return (directionsMap.get(`x${x}`) || directionsMap.get(`y${y}`))!;
    }

    (function init() {
        offset = MAZE_CELL_SIZE / 2 + OUTER_WALL_WIDTH;
        unvisitedCellsMap = {};

        game.resizeCanvas(OUTER_WALL_WIDTH * 2 + MAZE_CELLS_HORIZONTAL * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) - MAZE_WALL_WIDTH, OUTER_WALL_WIDTH * 2 + MAZE_CELLS_VERTICAL * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) - MAZE_WALL_WIDTH);
        ctx = game.background2DContext;
        ctx.fillStyle = MAZE_WALL_COLOR;
        ctx.fillRect(0, 0, game.width, game.height);

        random = randomGen(seed);

        ctx.strokeStyle = MAZE_CELL_COLOR;
        ctx.lineCap = 'square';
        ctx.lineWidth = MAZE_CELL_SIZE;
        ctx.beginPath();

        for (let i = 0; i < MAZE_CELLS_VERTICAL; i++) {
            game.walls[i] = [];
            for (let j = 0; j < MAZE_CELLS_HORIZONTAL; j++) {
                unvisitedCellsMap[getMazeCellId(i, j)] = true;
                game.walls[i][j] = [];
            }
        }

        unvisitedCellsMap[getMazeCellId(CURRENT_X, CURRENT_Y)] = false;
        game.walls[0][0] = [1, 1, 1, 1];
        route = [[CURRENT_X, CURRENT_Y]];
        ctx.moveTo(
            CURRENT_X * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
            CURRENT_Y * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
        );
    })();

    function getMazeCellId(x: number, y: number): string {
        return `${x}.${y}`;
    }

    function saveWallsForCurrentMazeCell(directionCoords: DirectionCoords) {
        const [x, y] = directionCoords;
        const nextMoveDirection = getDirectionFromCoords(directionCoords);

        game.walls[CURRENT_Y + y][CURRENT_X + x] = {
            [Direction.TOP]: [1, 1, 0, 1],
            [Direction.RIGHT]: [1, 1, 1, 0],
            [Direction.BOTTOM]: [0, 1, 1, 1],
            [Direction.LEFT]: [1, 0, 1, 1],
        }[nextMoveDirection];
    }

    function removeWallsForPreviousMazeCell(nextMoveDirection: Direction) {
        switch_case({
            [Direction.TOP]: () => {
                const [t, r, b, l] = game.walls[CURRENT_Y][CURRENT_X];
                game.walls[CURRENT_Y][CURRENT_X] = [0, r, b, l];
            },
            [Direction.RIGHT]: () => {
                const [t, r, b, l] = game.walls[CURRENT_Y][CURRENT_X];
                game.walls[CURRENT_Y][CURRENT_X] = [t, 0, b, l];
            },
            [Direction.BOTTOM]: () => {
                const [t, r, b, l] = game.walls[CURRENT_Y][CURRENT_X];
                game.walls[CURRENT_Y][CURRENT_X] = [t, r, 0, l];
            },
            [Direction.LEFT]: () => {
                const [t, r, b, l] = game.walls[CURRENT_Y][CURRENT_X];
                game.walls[CURRENT_Y][CURRENT_X] = [t, r, b, 0];
            },
        })(nextMoveDirection)();
    }

    let loop = function () {
        CURRENT_X = route[route.length - 1][0] | 0;
        CURRENT_Y = route[route.length - 1][1] | 0;

        const possibleDirections: DirectionCoords[] = Array.from(directionsCoordsMap.values());
        const alternativeDirectionsForNextMove = [];

        for (let i = 0; i < possibleDirections.length; i++) {
            if (unvisitedCellsMap[getMazeCellId(possibleDirections[i][0] + CURRENT_X, possibleDirections[i][1] + CURRENT_Y)]) {
                alternativeDirectionsForNextMove.push(possibleDirections[i]);
            }
        }

        if (!alternativeDirectionsForNextMove.length) {
            route.pop();
            if (route.length > 0) {
                ctx.moveTo(
                    route[route.length - 1][0] * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
                    route[route.length - 1][1] * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
                );
                timer = setTimeout(loop, CELL_DRAW_DELAY);
            }

            // console.log(walls);
            return;
        }

        const selectedAlternativeDirectionIndex: number = random() * alternativeDirectionsForNextMove.length | 0;
        const directionCoords: DirectionCoords = alternativeDirectionsForNextMove[selectedAlternativeDirectionIndex];

        saveWallsForCurrentMazeCell(directionCoords);
        removeWallsForPreviousMazeCell(getDirectionFromCoords(directionCoords));

        route.push([directionCoords[0] + CURRENT_X, directionCoords[1] + CURRENT_Y]);

        ctx.lineTo(
            (directionCoords[0] + CURRENT_X) * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
            (directionCoords[1] + CURRENT_Y) * (MAZE_CELL_SIZE + MAZE_WALL_WIDTH) + offset,
        );

        unvisitedCellsMap[getMazeCellId(directionCoords[0] + CURRENT_X, directionCoords[1] + CURRENT_Y)] = false;
        ctx.stroke();

        timer = setTimeout(loop, CELL_DRAW_DELAY);
    };
    loop();
}