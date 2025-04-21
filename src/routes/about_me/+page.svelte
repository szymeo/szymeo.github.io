<script lang="ts">
	import { DEFAULT_ANIMATION } from '$lib/shared/animations';
	import { fly } from 'svelte/transition';
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	const contents = `I'm **Szymon Gracki**, a product-focused Software Engineer with over 9 years of experience building mission-critical frontend solutions that drive business results.

### My Approach

I believe great software is born at the intersection of technical excellence and deep user empathy. Throughout my career at companies like Box and Cobiro, I've specialized in:

- **Transforming Legacy Systems** — I led a whiteboarding tool refactoring that reduced technical debt by 90% and prevented a projected 6-month delay, saving substantial operational costs.

- **Architectural Innovation** — By implementing React, PixiJS, and DDD/CQRS principles, I've reduced delivery timelines by up to 40% while improving product performance.

- **Team Empowerment** — I've boosted team productivity by 45% through mentorship, process optimization, and facilitating seamless collaboration across time zones.

### Beyond the Day Job

My passion for solving complex problems extends beyond my professional work:

- **Open Source Contributions** — I created [Glixy](https://github.com/szymeo/glixy), a WebGL library that simplifies complex technical implementations for developers.

- **Entrepreneurial Spirit** — I built and led development of [Logdash](https://logdash.io), a zero-config cloud observability platform born from identifying and solving real engineering pain points.

- **Speaker & Hackathon Champion** — I've presented at multiple developer conferences and won first place in the Smart City Datathon (2022), creating solutions that range from gamified city exploration to VR sales platforms.

### My Technical Toolkit

My expertise spans a wide range of technologies including React, Angular, JavaScript, TypeScript, GraphQL, CQRS, DDD, WebGL, and more. I specialize in:

- Frontend architecture and optimization
- Domain-driven design implementation
- Test-driven development and automation
- WebGL and complex visualization tools
- Microfrontends and scalable architectures

### Beyond Coding

When I'm not writing code, you'll find me at the gym, playing squash, tinkering with gas RC models, building Lego Technic sets, or diving into books on entrepreneurship and product development.

Currently reading: "The Lean Startup" by Eric Ries and "Continuous Discovery Habits" by Teresa Torres

### Let's Connect

I'm always open to discussing new projects, technical challenges, or innovative ideas. Whether you're looking for a technical consultant, a team leader, or a collaborator on your next big project, let's talk about how we can create something amazing together.

[Contact Me](https://linkedin.com/in/sgracki)`;
</script>

<svelte:head>
	<title>Simon Gracki | about_me</title>
	<meta name="description" content="Szymon Gracki | my personal website" />
</svelte:head>

<div class="markdown max-w-4xl space-y-2">
	<Markdown md={contents} plugins={[gfmPlugin()]} />
</div>
