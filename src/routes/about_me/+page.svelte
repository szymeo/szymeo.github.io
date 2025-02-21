<script lang="ts">
	import { DEFAULT_ANIMATION } from '$lib/shared/animations';
	import { fly } from 'svelte/transition';

	const paragraphs = [
		`I'm the most passionate about programming, doing it ever since 2012.`,
		`Except for dev, my areas of biggest interest includes entrepreneurship and psychology.`,
		`I'm into gym, healthy food, embracing discomfort and learning.`,
	];
</script>

<svelte:head>
	<title>Simon Gracki | about_me</title>
	<meta name="description" content="Simon Gracki's personal website" />
</svelte:head>

<div class="space-y-2">
	{#each paragraphs as p, i}
		<div in:fly|global={DEFAULT_ANIMATION(i)}>
			<h5>
				{p}
			</h5>
		</div>
	{/each}
</div>
