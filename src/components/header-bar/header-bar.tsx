import React, { FC } from 'react';

import './header-bar.css';

const HeaderBar: FC = () => (
    <div className='header-bar'>
        <h2 className='header-bar-text'>
            <span className='title-accent'>Job</span>
            Logger
        </h2>
    </div>
);

export default HeaderBar;
