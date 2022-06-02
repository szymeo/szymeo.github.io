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
            com_dimensions(10, 10),
            com_movement(),
        ],
    });

    draw_maze(game);
}

function draw_maze(game: Game): void {
    let pathWidth = 28;       //Width of the Maze Path
    let wall = 2;             //Width of the Walls between Paths
    let outerWall = 2;        //Width of the Outer most wall
    let width = 26;           //Number paths fitted horisontally
    let height = 26;          //Number paths fitted vertically
    let delay = 0;            //Delay between algorithm cycles
    let x = width / 2 | 0;        //Horisontal starting position
    let y = height / 2 | 0;       //Vertical starting position
    let seed = Math.random() * 100000 | 0;//Seed for random numbers
    let wallColor = '#4a148c';   //Color of the walls
    let pathColor = '#ebebeb';//Color of the path
    let random: () => number;
    let route: number[][];
    let ctx: CanvasRenderingContext2D;
    let map: unknown[][] = [];
    let offset: number;
    let timer: ReturnType<typeof setTimeout>;

    let randomGen = function (seed: number) {
        if (seed === undefined) seed = performance.now();
        return function () {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    };

    let init = function () {
        offset = pathWidth / 2 + outerWall;
        map = [];


        game.resizeCanvas(outerWall * 2 + width * (pathWidth + wall) - wall, outerWall * 2 + height * (pathWidth + wall) - wall);
        ctx = game.background2DContext;
        ctx.fillStyle = wallColor;
        ctx.fillRect(0, 0, game.width, game.height);

        random = randomGen(seed);

        ctx.strokeStyle = pathColor;
        ctx.lineCap = 'square';
        ctx.lineWidth = pathWidth;
        ctx.beginPath();

        for (let i = 0; i < height * 2; i++) {
            map[i] = [];

            for (let j = 0; j < width * 2; j++) {
                map[i][j] = false;
            }
        }

        map[y * 2][x * 2] = true;
        route = [[x, y]];
        ctx.moveTo(x * (pathWidth + wall) + offset,
            y * (pathWidth + wall) + offset);
    };
    init();

    let loop = function () {
        let direction;
        x = route[route.length - 1][0] | 0;
        y = route[route.length - 1][1] | 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const alternatives = [];

        for (let i = 0; i < directions.length; i++) {
            if (map[(directions[i][1] + y) * 2] !== undefined &&
                map[(directions[i][1] + y) * 2][(directions[i][0] + x) * 2] === false) {
                alternatives.push(directions[i]);
            }
        }

        if (alternatives.length === 0) {
            route.pop();
            if (route.length > 0) {
                ctx.moveTo(route[route.length - 1][0] * (pathWidth + wall) + offset,
                    route[route.length - 1][1] * (pathWidth + wall) + offset);
                timer = setTimeout(loop, delay);
            }
            return;
        }
        direction = alternatives[random() * alternatives.length | 0];
        route.push([direction[0] + x, direction[1] + y]);
        ctx.lineTo((direction[0] + x) * (pathWidth + wall) + offset,
            (direction[1] + y) * (pathWidth + wall) + offset);
        map[(direction[1] + y) * 2][(direction[0] + x) * 2] = true;
        map[direction[1] + y * 2][direction[0] + x * 2] = true;
        ctx.stroke();
        // console.log(map);
        timer = setTimeout(loop, delay);
    };
    loop();
}