<script>
	import { movies_json } from '$lib/data/movies.json';
	import { DEFAULT_ANIMATION } from '$lib/shared/animations';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Simon Gracki | movies</title>
	<meta name="description" content="Simon Gracki's personal website" />
</svelte:head>

<div class="space-y-2">
	{#each movies_json as movie, i}
		<div in:fly|global={DEFAULT_ANIMATION(i)}>
			<h5>
				{movie.title}
			</h5>

			<p class="text-secondary truncate">
				{movie.comment}
			</p>
		</div>
	{/each}
</div>
