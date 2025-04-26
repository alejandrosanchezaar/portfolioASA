export interface Experience {
    time: string;
    role: string;
    description: string;
    sections: Section[];
    actual: boolean;
}

export interface Section {
    description: string;
}
