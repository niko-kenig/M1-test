import {useCallback, useMemo, useState} from 'react';
import { ItemType, SortHookResult } from "../types/types";

function useSort(items: ItemType[]): SortHookResult {
	const [sortBy, setSortBy] = useState<'ASC' | 'DESC'>('ASC');

	const sortedItems = useMemo(() => {
		if (sortBy === 'DESC') {
			return [...items].sort((a, b) => b.id - a.id);
		}
		return [...items].sort((a, b) => a.id - b.id);
	}, [items, sortBy]);

	const handleSortClick = useCallback(() => {
		setSortBy(sortBy === 'ASC' ? 'DESC' : 'ASC');
	}, [sortBy]);

	return [sortedItems, sortBy, handleSortClick];
}

export default useSort;
