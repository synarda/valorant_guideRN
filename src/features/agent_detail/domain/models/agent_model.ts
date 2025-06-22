
export type Agent = {
    uuid: string;
    displayName: string;
    description: string;
    fullPortrait?: string;
    role?: {
        displayName: string;
        displayIcon?: string;
    };
    abilities: {
        slot: string;
        displayName: string;
        description: string;
        displayIcon?: string;
    }[];
};
