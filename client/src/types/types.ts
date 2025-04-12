// Определение типа для элемента списка
export type ItemType = {
    id: number;
    name: string;
    description: string;
};

// Определение типа для компонента ListItem
export type ListItemProps = {
    id: number;
    name: string;
    description: string;
    onClick: (id: number) => void;
    isActive: boolean;
};

// Определение типа для хука useSort
export type SortHookResult = [
    ItemType[],
        'ASC' | 'DESC',
    () => void
];

// Определение типа для компонента SubTitle
export type SubTitleProps = {
    children: React.ReactNode;
};


export type ButtonProps = {
    onClick: (id: number) => void;
    id: number;
    disabled: boolean;
    children: React.ReactNode;
};
