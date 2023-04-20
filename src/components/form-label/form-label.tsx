import React, { FC } from 'react';

interface Props {
    htmlFor: string,
    label: string,
};

const FormLabel: FC<Props> = ({ htmlFor, label }) => (
    <div>
        <label htmlFor={htmlFor}>{label}</label>
    </div>
);

export default FormLabel;
