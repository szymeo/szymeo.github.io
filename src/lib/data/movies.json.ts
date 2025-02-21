enum Rating {
	REWATCHABLE,
	NEUTRAL,
	REGRETTABLE,
}

type Movie = {
	title: string;
	description: string;
	comment: string;
	rating: Rating;
};

export const movies_json: Movie[] = [
	{
		title: 'The Office',
		description:
			'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
		comment: 'Skip 1st season, watch until season 6-7.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'Climax',
		description:
			'French dancers gather in a remote, empty school building to rehearse on a wintry night. The all-night celebration morphs into a hallucinatory nightmare when they learn their sangria is laced with LSD.',
		comment: 'This movie makes me feel good and wrong in every way.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'Wolf of Wall Street',
		description:
			'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
		comment: 'Great when younger, now it just feels sad to watch.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'Dzień Świra',
		description:
			'An ironic look at a climber who decides to do anything to get to the top.',
		comment: 'Worth to see, sad to rewatch.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'The Big Short',
		description:
			'In 2006-2007 a group of investors bet against the US mortgage market. In their research, they discover how flawed and corrupt the market is.',
		comment: 'Wall street behind the scenes in 2008 crisis.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'The Social Dilemma',
		description:
			'Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.',
		comment:
			'One of the movies actually touching on the todays society problems.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'The Matrix',
		description:
			'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
		comment: 'Great classic, a must watch.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'Film Balkonowy',
		description: 'A short film about a balcony.',
		comment: 'Solid, thought provoking documentary.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'Dobre rady Johnego Wilsona',
		description:
			'John Wilson embarks on an odyssey of self-discovery and cultural observation by covertly filming the lives of fellow New Yorkers while trying to give everyday advice.',
		comment: 'Timeless documentary.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: `I'm a yes man`,
		description: `A guy challenges himself to say "yes" to everything for an entire year.`,
		comment: 'Fun, a little thought provoking, chill movie.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'Wolny strzelec (Nightcrawler)',
		description: `When Louis Bloom (Jake Gyllenhaal), a 'stringer' in the world of crime journalism, catches a break, he is able to record a series of violent crimes. But when the stakes are raised, Bloom puts his own life on the line.`,
		comment: 'Stunning, exciting, heavy.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'Pulp Fiction',
		description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
		comment:
			'I cannot recall any solid big-picture from the movie, even though I recall some of the scenes.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'The Grand Budapest Hotel',
		description: `A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.`,
		comment: 'Great movie, absolutely rewatchable, need to watch with A.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'The Lobster',
		description: `In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.`,
		comment: 'Heavy, interesting, a bit depressing, annoying ending.',
		rating: Rating.NEUTRAL,
	},
	{
		title: 'Django',
		description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.`,
		comment: 'Impressive, fulfilling experience, good intensivity.',
		rating: Rating.REWATCHABLE,
	},
	{
		title: 'The Village',
		description: `A series of events tests the beliefs of a small isolated countryside village.`,
		comment: 'Stunning, thought provoking, need to watch with A.',
		rating: Rating.REWATCHABLE,
	},
];
