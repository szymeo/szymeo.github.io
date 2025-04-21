import { quadInOut } from 'svelte/easing';

export const DEFAULT_ANIMATION = (i: number) => ({
	y: 1,
	delay: 5 * i,
	duration: 250,
	easing: quadInOut,
});
