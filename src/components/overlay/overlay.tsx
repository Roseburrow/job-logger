import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import './overlay.css';

const Overlay: FC = () => {
    return (
        createPortal(
            <div className='overlay' />,
            document.body,
        )
    );
};

export default Overlay;