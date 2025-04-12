import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { ListItem } from './components';
import useData from './useData';
import useSort from './useSort';
import { ItemType, SubTitleProps } from "../types/types";

const SubTitle: React.FC<SubTitleProps> = ({ children }) => (
    <h2 className={'list-subtitle'}>Active Item ID: {children}</h2>
);

function ListPage() {
    const items: ItemType[] = useData();
    const [sortedItems, sortBy, handleSortClick] = useSort(items);

    const [activeItemId, setActiveItemId] = useState<number | null>(null);
    const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
    const [query, setQuery] = useState<string>('');

    const activeItemText = useMemo(() => activeItemId || 'Empty', [activeItemId]); // Используем activeItemId в зависимости

    const handleItemClick = useCallback((id: number) => {
        setActiveItemId(id);
    }, []); // Используем useCallback

    const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }, []); // Используем useCallback

    useEffect(() => {
        setFilteredItems(sortedItems);
    }, [sortedItems]);

    useEffect(() => {
        if (query.length > 0) {
            setFilteredItems(sortedItems.filter(item => `${item.id}`.includes(query.toLowerCase().trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
        } else {
            setFilteredItems(sortedItems);
        }
    }, [query, sortedItems]);

    return (
        <div className={'list-wrapper'}>
            <div className="list-header">
                <h1 className={'list-title'}>Items List</h1>
                <SubTitle>{activeItemText}</SubTitle>
                <button onClick={handleSortClick}>Sort ({sortBy === 'ASC' ? 'ASC' : 'DESC'})</button>
                <input type="text" placeholder={'Filter by ID'} value={query} onChange={handleQueryChange} />
            </div>
            <div className="list-container">
                <div className="list">
                    {filteredItems.length === 0 && <span>Loading...</span>}
                    {filteredItems.map((item, index) => (
                        <ListItem
                            key={item.id} // Используйте item.id вместо index для ключа
                            isActive={activeItemId === item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            onClick={handleItemClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListPage;
