import { ProjectStatus } from '$lib/shared/types';

type Project = {
	name: string;
	description: string;
	status: ProjectStatus;
	link: string;
};

export const projects_json: Project[] = [
	{
		name: 'Logdash',
		description: 'A zero-config cloud based observability platform.',
		status: ProjectStatus.ONGOING,
		link: 'https://logdash.io',
	},
	{
		name: 'Lollo',
		description: 'Your after hours League Of Legends gamer hub.',
		status: ProjectStatus.ACTIVE,
		link: 'https://lollo.vercel.app',
	},
	{
		name: 'Glixy',
		description: 'Performant PixiJS apps in Svelte without a struggle ✨',
		status: ProjectStatus.ACTIVE,
		link: 'https://glixy.dev',
	},
	{
		name: 'Szpaj',
		description: 'Game of spies with balanced randomness.',
		status: ProjectStatus.ACTIVE,
		link: 'https://szpaj.vercel.app',
	},
	{
		name: 'Spendingo',
		description: 'Insights for your spending. Secure and free.',
		status: ProjectStatus.ACTIVE,
		link: 'https://spendingo.com',
	},
	{
		name: 'h4ck9ine',
		description: '1st place hackathon entry. Area IQ visualization.',
		status: ProjectStatus.ACTIVE,
		link: 'https://h4ck9ine.web.app/',
	},
	{
		name: 'universal-di',
		description:
			'Universal Dependency Injection for Typescript with Angular-like API.',
		status: ProjectStatus.ACTIVE,
		link: 'https://github.com/universal-di',
	},
	{
		name: 'Core',
		description: 'Cognitive workspace for hyper-productive teams.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://getcore.app',
	},
	{
		name: 'Ships',
		description: 'Offline ships game, with your own strategy algorithm.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://ships.vercel.app',
	},
	{
		name: 'Bluestudio',
		description: 'Movie editing desktop app built with Svelte and Tauri.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/bluestudio',
	},
	{
		name: 'comenaskme',
		description: 'Marketplace for talking to experts online.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://comenaskme.online',
	},
	{
		name: 'Awesome Hooks',
		description: 'Awesome React hooks collection.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/awesome-hooks',
	},
	{
		name: 'Cards-Against-Humanity',
		description:
			'[Educational] Popular game implementation using Angular and Colyseus.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/Cards-Against-Humanity',
	},
	{
		name: 'Bundly',
		description: 'Facebook groups on steroids.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://bundly.com',
	},
	{
		name: 'smegsmeg',
		description: 'VR Showroom for an online sales platform.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/TeamDoubleBrackets/smegsmeg',
	},
	{
		name: 'QlikViewer',
		description: 'VR Qlik Dashboard viewer.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/QlikViewer',
	},
	{
		name: 'Hooku',
		description:
			'Gamizcated city sightseeing, with AI engine detecting buildings in Warsaw by photo and interface in Facebook Messenger - as a bot.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/hooku',
	},
	{
		name: 'yacanar',
		description:
			'Lost hackathon entry, spot ticket checkers before they spot you.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/yacanar',
	},
	{
		name: 'scrollgod',
		description: '🕶 Light javascript library based on wheel event.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/scrollgod',
	},
	{
		name: 'taskBoard',
		description:
			'Dapulse style taskboard, easy to implement to your website as external module.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/taskBoard',
	},
	{
		name: 'hcboy',
		description: 'Lost hackathon entry, find nearby doctors.',
		status: ProjectStatus.DISCONTINUED,
		link: 'https://github.com/szymeo/hcboy',
	},
];
