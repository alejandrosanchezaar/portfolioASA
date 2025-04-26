export interface Stack {
    technology: string;
    description: string;
    icon: string;
    link: string;
    tags: string[];
  }
  
  export interface StackGroup {
    group: string;
    technologies: Stack[];
  }