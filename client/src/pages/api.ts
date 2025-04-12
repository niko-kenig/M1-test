import type { ItemType } from '../types/types';

export const api = async (id: string, setItem: (item: ItemType) => void, setError: (error: string) => void, signal?: AbortSignal) => {
    try {
        if (Number(id) % 3 === 0) {
            throw new Error('Forbidden');
        }

        const response = await fetch(`${process.env.API_URL}/items/${id}`, {
            signal,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ItemType = await response.json();
        setItem(data);
    } catch (err) {
        if (err.name === 'AbortError') {
            console.log('Request was aborted');
        } else if (err.message === 'Forbidden') {
            setError('403 Forbidden');
        } else {
            setError(err.message);
        }
    }
};
