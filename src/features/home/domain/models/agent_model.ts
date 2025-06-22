export interface Agent {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    role?: {
        displayName: string;
        displayIcon: string;
    };
}
