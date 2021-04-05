export interface projectType {
	title: string;
	image: string[];
	intro: string;
	description: string[];
	details: string[];
	stack: string[];
	period: string;
	link: {
		github: string;
		youtube: string;
	};
}

export interface skillsType {
	title: string;
	logo: string;
	description: string;
}

export interface postsType {
	date: string;
	link: string;
	title: string;
	new: boolean;
}
