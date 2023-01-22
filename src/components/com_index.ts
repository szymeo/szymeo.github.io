import { Collision } from './com_collision';
import { CollisionEffect } from './com_collision_effect';
import { Dimensions } from './com_dimensions';
import { Draw } from './com_draw';
import { Movement } from './com_movement';
import { Transform } from './com_transform';
import { Notification } from './com_notification';

export const enum Get {
    Transform,
    Draw,
    Dimensions,
    Movement,
    Collision,
    CollisionEffect,
    Notification,
}

export interface ComponentData {
    [Get.Transform]: Array<Transform>;
    [Get.Draw]: Array<Draw>;
    [Get.Dimensions]: Array<Dimensions>;
    [Get.Movement]: Array<Movement>;
    [Get.Collision]: Array<Collision>;
    [Get.CollisionEffect]: Array<CollisionEffect>;
    [Get.Notification]: Array<Notification>;
}

export const enum Has {
    Transform = 1 << Get.Transform,
    Draw = 1 << Get.Draw,
    Dimensions = 1 << Get.Dimensions,
    Movement = 1 << Get.Movement,
    Collision = 1 << Get.Collision,
    CollisionEffect = 1 << Get.CollisionEffect,
    Notification = 1 << Get.Notification,
}