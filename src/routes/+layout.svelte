<script lang="ts">
	import { page } from '$app/state';
	import GithubIcon from '$lib/shared/ui/icons/GithubIcon.svelte';
	import { onMount, type Snippet } from 'svelte';
	import '../app.css';
	import LinkedinIcon from '$lib/shared/ui/icons/LinkedinIcon.svelte';
	import { with_base_path } from '$lib/shared/utils/with-base-path';
	import { goto } from '$app/navigation';

	const ROUTES = $state([
		{ name: 'Projects', href: with_base_path('/projects') },
		// { name: 'blog', href: '/blog' },
		{ name: 'About me', href: with_base_path('/about_me') },
	]);

	onMount(() => {
		if (page.url.hash) {
			ROUTES.push({ name: 'movies', href: with_base_path('/movies') });
		}
	});

	$effect(() => {
		if (page.url.pathname === '/') {
			goto(with_base_path('/projects'));
		}
	});

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<div class="h-dvh gap-4">
	<div class="flex h-full w-full flex-col overflow-auto sm:flex-row">
		<div
			class="sticky top-0 w-full max-w-sm space-y-2 bg-black p-3 px-4 md:space-y-4 md:py-6 md:pl-8"
		>
			<nav class="z-10 flex w-full flex-col items-start justify-center">
				<img
					loading="eager"
					src={with_base_path('/image.png')}
					alt="Simon Gracki"
					class="mb-4 h-20 w-20 rounded-full md:h-32 md:w-32"
				/>

				<h1 class="relative w-fit text-3xl">Szymon Gracki</h1>

				<div class="flex items-center gap-3 md:gap-3">
					{#each ROUTES as { name, href }, i}
						<a
							{href}
							class={[
								'',
								{
									'text-primary': page.url.pathname === href,
									'hover:text-primary text-secondary':
										page.url.pathname !== href,
								},
							]}
						>
							{name}
						</a>
					{/each}
				</div>
			</nav>

			<footer class="space-y-2">
				<div class="flex items-center justify-start gap-2">
					<a
						href="https://github.com/szymeo"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary rounded-full text-gray-100"
					>
						<GithubIcon class="h-6 w-6" fill="fill-current" />
					</a>

					<a
						href="https://linkedin.com/in/sgracki"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary rounded-full text-gray-100"
					>
						<LinkedinIcon class="h-6 w-6" fill="fill-current" />
					</a>
				</div>

				<p class="text-secondary text-sm">
					© {new Date().getFullYear()} Szymon Gracki
				</p>
			</footer>
		</div>

		<main class="flex-1 overflow-auto px-4 pb-3 sm:p-6 sm:pr-8">
			{@render children()}
		</main>
	</div>
</div>
