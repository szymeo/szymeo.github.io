import { Entity, Game } from '../game';

export type Mixin = (game: Game, entity: Entity) => void;

export interface Blueprint {
    coords: {
        x: number;
        y: number;
    };
    components: Mixin[];
}