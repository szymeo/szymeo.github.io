import { Get } from '../components/com_index';
import { Entity, Game } from '../game';

export function wid_collision_notification(game: Game, entity: Entity): void {
    const { value } = game[Get.Notification][entity];

    const isLinkVisible = game.collisionNotificationContainer?.querySelector('a')?.href === value;

    if (isLinkVisible) {
        return
    }

    const link = document.createElement('a');
    const linkText = document.createTextNode('Open me');
    link.appendChild(linkText);
    link.title = 'Link';
    link.target = '_blank';
    link.href = value;
    game.collisionNotificationContainer?.appendChild(link);
}
