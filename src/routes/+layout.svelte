<script lang="ts">
	import { page } from '$app/state';
	import GithubIcon from '$lib/shared/ui/icons/GithubIcon.svelte';
	import { type Snippet } from 'svelte';
	import '../app.css';
	import LinkedinIcon from '$lib/shared/ui/icons/LinkedinIcon.svelte';

	const ROUTES = [
		{ name: 'projects', href: '/projects' },
		// { name: 'blog', href: '/blog' },
		{ name: 'movies', href: '/movies' },
		{ name: 'about_me', href: '/about_me' },
	];

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<div class=" h-dvh gap-4">
	<div class="flex h-full w-full flex-col overflow-auto sm:flex-row">
		<div
			class="sticky top-0 w-full max-w-sm space-y-2 bg-black p-3 px-4 md:space-y-4 md:py-6 md:pl-8"
		>
			<nav class="z-10 flex w-full flex-col items-start justify-center">
				<img
					loading="eager"
					src="/image.png"
					alt="Simon Gracki"
					class="mb-4 h-20 w-20 rounded-full md:h-32 md:w-32"
				/>

				<h1 class="relative w-fit text-3xl">Simon Gracki</h1>

				<div class="flex items-center gap-3 md:gap-4">
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
					© {new Date().getFullYear()} Simon Gracki
				</p>
			</footer>
		</div>

		<main class="flex-1 px-4 pb-3 sm:p-6 sm:pr-8">
			{@render children()}
		</main>
	</div>
</div>
