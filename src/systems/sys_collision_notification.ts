import { Get, Has } from '../components/com_index';
import { Game } from '../game';

const QUERY = Has.Transform | Has.CollisionEffect | Has.Notification;

export function sys_collision_notification(game: Game) {
    let activeCollisionsCount = 0;

    for (let i = 0; i < game.entities.length; i++) {
        if ((game.entities[i] & QUERY) === QUERY) {
            const collisionEffect = game[Get.CollisionEffect][i];
            activeCollisionsCount += collisionEffect.active ? 1 : 0;
        }
    }

    if (!activeCollisionsCount) {
        update(game);
    }
}

function update(game: Game) {
    game.collisionNotificationContainer?.replaceChildren();
}
