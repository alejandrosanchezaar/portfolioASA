export interface Project {
    title: string;
    description: string;
    video: string;
    finished: boolean;
    github: boolean;
    ref: string;
    tags: Tag[];
    buttonTitle: string;
    icon: string;
    port: string;
}

export interface Tag {
    name: string;
    icon: string;
}
