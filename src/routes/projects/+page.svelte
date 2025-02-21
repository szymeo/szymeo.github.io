<script>
	import { projects_json } from '$lib/data/projects.json';
	import { DEFAULT_ANIMATION } from '$lib/shared/animations';
	import { ProjectStatus } from '$lib/shared/types';
	import ExternalIcon from '$lib/shared/ui/icons/ExternalIcon.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Simon Gracki | projects</title>
	<meta name="description" content="Simon Gracki's personal website" />
</svelte:head>

<div class="space-y-2">
	{#each projects_json as project, i}
		<div in:fly|global={DEFAULT_ANIMATION(i)} class="leading-5">
			<a
				href={`${project.link}?ref=szymeo.github.io`}
				rel="noopener noreferrer"
				target="_blank"
				class="text-primary flex w-fit cursor-pointer items-center gap-1 hover:underline"
			>
				{project.name} - open
				<ExternalIcon class="h-4 w-4" />
			</a>

			<p class="text-secondary truncate md:whitespace-pre-wrap">
				{project.description}
			</p>

			<span
				class={[
					'block text-xs leading-5 font-semibold capitalize',
					{
						'text-green-500':
							project.status === ProjectStatus.SUCCESSFUL,
						'text-purple-500':
							project.status === ProjectStatus.ONGOING,
						'text-red-500': project.status === ProjectStatus.FAILED,
					},
				]}
			>
				{project.status}
			</span>
		</div>
	{/each}
</div>
