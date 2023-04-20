import { isNil, map } from 'lodash';
import React, { FC } from 'react';

import './table-row.css';

interface Props {
    columns: Record<string, string>,
    data: Record<string, any>,
}

const TableRow: FC<Props> = ({ columns, data }) => {
    const dataCells: Array<JSX.Element> = map(columns, (text, dataKey) => {
        const cellText: string = isNil(data[dataKey]) ? '-' : String(data[dataKey]);

        return (
            <td className='table-cell'>{cellText}</td>
        );
    });

    return (
        <tr className='table-row'>
            {dataCells}
        </tr>
    );
};

export default TableRow;
