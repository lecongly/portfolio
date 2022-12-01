export interface IProjects {
    projects: IProject[];
};

export interface IProject {
    title: string;
    date: string;
    description: string;
    cover_image: string;
    categories: string[];
    technologies: string[];
    tags: string[];
    slug: string;
    github_url?: string;
    host_url?: string;
    external_url?: string;
};