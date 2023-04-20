import { map } from 'lodash';
import React, { FC } from 'react';

import './table-header.css'

interface Props {
    columns: Record<string, string>,
};

const TableHeader: FC<Props> = ({ columns }) => {
    const headerCells: Array<JSX.Element> = map(columns, (headerText: string) => (
        <th className='header-cell'>{headerText}</th>
    ));

    return (
        <thead>
            <tr className='table-header-row'>
                {headerCells}
            </tr>
        </thead>
    );
};

export default TableHeader;
