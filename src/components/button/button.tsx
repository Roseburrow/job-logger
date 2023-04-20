import React, { FC } from 'react';

import './button.css';

interface Props {
    children: string,
    onClick: Function
}

const Button: FC<Props> = ({ children, onClick }) => {
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    };

    return (
        <button className="primary-button" type='button' onClick={onClickHandler}>
            {children}
        </button>
    )
};

export default Button;
