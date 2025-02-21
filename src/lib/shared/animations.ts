import { quadInOut } from 'svelte/easing';

export const DEFAULT_ANIMATION = (i: number) => ({
	y: 1,
	delay: 50 * i,
	duration: 400,
	easing: quadInOut,
});
