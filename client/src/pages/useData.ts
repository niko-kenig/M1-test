import {useCallback, useEffect, useState} from 'react';
import { ItemType } from "../types/types";

function useData(): ItemType[] {
	const [items, setItems] = useState<ItemType[]>([]);

	const fetchItems = useCallback(async () => {
		try {
			const response = await fetch(`${process.env.API_URL}/items`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data: ItemType[] = await response.json();
			setItems(data);
		} catch (err) {
			console.error('Failed to fetch items', err);
		}
	}, []);

	useEffect(() => {
		fetchItems();
		const intervalId = setInterval(fetchItems, 10000);
		return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
	}, [fetchItems]);

	return items;
}

export default useData;
