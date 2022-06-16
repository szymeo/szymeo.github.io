import { Blueprint } from './blueprints/blu_index';
import { Collision } from './components/com_collision';
import { CollisionEffect } from './components/com_collision_effect';
import { Dimensions } from './components/com_dimensions';
import { Draw } from './components/com_draw';
import { ComponentData, Get } from './components/com_index';
import { Movement } from './components/com_movement';
import { com_transform, Transform } from './components/com_transform';
import { sys_collision_effect } from './systems/sys_collision_effect';
import { sys_draw } from './systems/sys_draw';
import { sys_movement } from './systems/sys_movement';
import { sys_wall_collision } from './systems/sys_wall_collision';
import { sys_waypoint_collision } from './systems/sys_waypoint_collision';
import { Keys, xCoord, yCoord } from './typings';
import { switch_case } from './utils/switch_case';
import { world } from './world';

export type Entity = number;

interface GameInput {
    [Keys.W]: boolean;
    [Keys.A]: boolean;
    [Keys.S]: boolean;
    [Keys.D]: boolean;
}

const MAX_ENTITIES = 1000;

export class Game implements ComponentData {
    public entities: number[] = [];
    public walls: number[][][] = [];
    public waypointCoords: [xCoord, yCoord][] = [];

    public [Get.Transform]: Transform[] = [];
    public [Get.Draw]: Draw[] = [];
    public [Get.Dimensions]: Dimensions[] = [];
    public [Get.Movement]: Movement[] = [];
    public [Get.Collision]: Collision[] = [];
    public [Get.CollisionEffect]: CollisionEffect[] = [];

    public game2DContext!: CanvasRenderingContext2D;
    public background2DContext!: CanvasRenderingContext2D;
    public input: GameInput = {
        [Keys.W]: false,
        [Keys.A]: false,
        [Keys.S]: false,
        [Keys.D]: false,
    };
    public firstTick = true;
    private RAF: ReturnType<typeof requestAnimationFrame> = 0;
    private readonly wallsCollisionCheckbox = document.getElementById('wallsCollision');
    private readonly movementSpeedInput = document.getElementById('movementSpeed');

    constructor(
        private readonly gameCanvas: HTMLCanvasElement,
        private readonly backgroundCanvas: HTMLCanvasElement,
    ) {
        this.game2DContext = gameCanvas.getContext('2d')!;
        this.background2DContext = backgroundCanvas.getContext('2d')!;
        this.game2DContext.imageSmoothingEnabled = true;
        this.captureMovement();
    }

    get width(): number {
        return this.gameCanvas.width;
    }

    get height(): number {
        return this.gameCanvas.height;
    }

    get wallsCollisionEnabled(): boolean {
        return (this.wallsCollisionCheckbox! as HTMLInputElement).checked;
    }

    get movementSpeed(): number {
        return Number((this.movementSpeedInput! as HTMLInputElement).value);
    }

    start(): void {
        world(this);
        this.startTick();
    }

    stop(): void {
        this.stopTick();
    }

    addEntity({ coords, components }: Blueprint): number {
        let entity = this.createEntity(Get.Transform);
        com_transform(coords)(this, entity);
        for (let mixin of components) {
            mixin(this, entity);
        }
        return entity;
    }

    resizeCanvas(width: number, height: number): void {
        this.gameCanvas.width = width;
        this.gameCanvas.height = height;
        this.backgroundCanvas.width = width;
        this.backgroundCanvas.height = height;
    }

    private update(delta: number): void {
        sys_movement(this, delta);
        sys_draw(this, delta);
        sys_wall_collision(this, delta);
        sys_waypoint_collision(this, delta);
        sys_collision_effect(this, delta);
    }

    private createEntity(mask = 0) {
        for (let i = 0; i < MAX_ENTITIES; i++) {
            if (!this.entities[i]) {
                this.entities[i] = mask;
                return i;
            }
        }
        throw new Error("No more entities available.");
    }

    private captureMovement(): void {
        document.addEventListener('keydown', e => switch_case({
            [Keys.W]: () => this.input[Keys.W] = true,
            [Keys.A]: () => this.input[Keys.A] = true,
            [Keys.S]: () => this.input[Keys.S] = true,
            [Keys.D]: () => this.input[Keys.D] = true,
            default: () => {
            },
        })(e.key)());

        document.addEventListener('keyup', e => switch_case({
            [Keys.W]: () => this.input[Keys.W] = false,
            [Keys.A]: () => this.input[Keys.A] = false,
            [Keys.S]: () => this.input[Keys.S] = false,
            [Keys.D]: () => this.input[Keys.D] = false,
            default: () => {
            },
        })(e.key)());
    }

    private startTick(): void {
        let last = performance.now();
        const tick = (now: number) => {
            if (this.firstTick) {
                this.firstTick = false;
            }
            let delta = (now - last) / 1000;
            this.update(delta);
            last = now;
            this.RAF = requestAnimationFrame(tick);
        };

        this.stopTick();
        tick(last);
    }

    private stopTick(): void {
        // console.clear();
        cancelAnimationFrame(this.RAF);
    }
}