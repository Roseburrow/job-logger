import { map } from 'lodash';
import React, { FC } from 'react';

import { TableHeader, TableRow } from '../../components';

import './table.css';

interface Props {
    columns: Record<string, string>,
    data: Array<Record<string, any>>,
};

const Table: FC<Props> = ({ columns, data }) => {
    const rowCells: Array<React.ReactNode> = data.map((rowData) => (
        <TableRow data={rowData} columns={columns} />
    ));

    return (
        <table className='table'>
            <TableHeader columns={columns}/>
            <tbody>
               {rowCells} 
            </tbody>
        </table>
    );
};

export default Table;
