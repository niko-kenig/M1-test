import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ListItemProps } from '../../types/types';

const ListItem: React.FC<ListItemProps> = ({ id, name, description, onClick, isActive }) => {
    const isActiveItem = isActive ? 'Active' : 'Set Active';

    const handleClickItem = useCallback(() => onClick(id), [onClick, id])

    return (
        <li className={isActive ? 'list-item active' : 'list-item'}>
            <Link to={`/${id}`}>
                <div className={'list-item-actions'}>
                    <div>ID: <b>{id}</b></div>
                </div>
                <div>{name}</div>
                <div className={'list-item__description'}>{description}</div>
            </Link>
            <Button onClick={handleClickItem} id={id} disabled={isActive}>
                {isActiveItem}
            </Button>
        </li>
    );
};

export default ListItem;
