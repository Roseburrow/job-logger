import React, { FC } from 'react';

import './form-row.css'

interface Props {
    children: React.ReactNode,
}

const FormRow: FC<Props> = ({ children }) => {
    return (
        <div className='form-row'>
            {children}
        </div>
    )
};

export default FormRow;
