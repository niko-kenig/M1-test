export type ItemType = {
    id: number;
    name: string;
    description: string;
};

export type ListItemProps = {
    id: number;
    name: string;
    description: string;
    onClick: (id: number) => void;
    isActive: boolean;
};

export type SortHookResult = [
    ItemType[],
        'ASC' | 'DESC',
    () => void
];

export type SubTitleProps = {
    children: React.ReactNode;
};


export type ButtonProps = {
    onClick: (id: number) => void;
    id: number;
    disabled: boolean;
    children: React.ReactNode;
};
