import React, { memo, useCallback } from 'react';
import {ButtonProps} from "../../types/types";

const Button: React.FC<ButtonProps> = ({ onClick, id, disabled, children }) => {
	const handleClick = useCallback(() => {
		onClick(id);
	}, [onClick,id]);
	
	return (
		<button onClick={handleClick} disabled={disabled}>{children}</button>
	)
}

export default memo(Button);
