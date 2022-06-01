import { Blueprint } from './blueprints/blu_index';
import { Dimensions } from './components/com_dimensions';
import { Draw } from './components/com_draw';
import { ComponentData, Get } from './components/com_index';
import { Movement } from './components/com_movement';
import { com_transform, Transform } from './components/com_transform';
import { sys_draw } from './systems/sys_draw';
import { sys_movement } from './systems/sys_movement';
import { Keys } from './types';
import { switchCase } from './utils';
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

    public [Get.Transform]: Transform[] = [];
    public [Get.Draw]: Draw[] = [];
    public [Get.Dimensions]: Dimensions[] = [];
    public [Get.Movement]: Movement[] = [];

    public context!: CanvasRenderingContext2D;
    public input: GameInput = {
        [Keys.W]: false,
        [Keys.A]: false,
        [Keys.S]: false,
        [Keys.D]: false,
    };
    private RAF: ReturnType<typeof requestAnimationFrame> = 0;

    constructor(
        private readonly canvas: HTMLCanvasElement,
        public readonly width: number,
        public readonly height: number,
    ) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = canvas.getContext('2d')!;
        this.context.imageSmoothingEnabled = true;
        this.captureMovement();
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

    private update(delta: number): void {
        sys_movement(this, delta);
        sys_draw(this, delta);
        // console.log(this.canvas, delta);
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
        document.addEventListener('keydown', e => switchCase({
            [Keys.W]: () => this.input[Keys.W] = true,
            [Keys.A]: () => this.input[Keys.A] = true,
            [Keys.S]: () => this.input[Keys.S] = true,
            [Keys.D]: () => this.input[Keys.D] = true,
            default: () => {
            },
        })(e.key)());

        document.addEventListener('keyup', e => switchCase({
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
            let delta = (now - last) / 1000;
            this.update(delta);
            last = now;
            this.RAF = requestAnimationFrame(tick);
        };

        this.stopTick();
        tick(last);
    }

    private stopTick(): void {
        console.clear();
        cancelAnimationFrame(this.RAF);
    }
}