export type xCoord = number;
export type yCoord = number;

export type DirectionCoords = [xCoord, yCoord];

export enum Direction {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
}

export enum Keys {
    W = 'w',
    A = 'a',
    S = 's',
    D = 'd',
    SHIFT = 'Shift'
}