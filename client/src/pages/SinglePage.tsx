import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemType } from '../types/types';
import { api } from "./api";

function SinglePage() {
    const { id } = useParams();
    const [item, setItem] = useState<ItemType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const timeoutId = setTimeout(() => {
            if (id) {
                api(id, setItem, setError, signal);
            }
        }, 10000);

        return () => {
            clearTimeout(timeoutId);
            abortController.abort();
        };
    }, [id]);

    return (
        <div className="detail">
            <Link to={'/'}>Go Back</Link>
            <h2>Item Details</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : item ? (
                <>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SinglePage;
