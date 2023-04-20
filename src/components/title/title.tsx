import React, { FC } from 'react';

import './title.css';

interface Props {
    children: string,
};

const Title: FC<Props> = ({ children }) => (
    <h1 className='title'>{children}</h1>
);

export default Title;
