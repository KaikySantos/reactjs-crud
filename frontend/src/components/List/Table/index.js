import React from 'react';
import './styles.css';

import TableRow from '../TableRow';

function Table() {
    return (
        <div className="table">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow name="Carlos Kaiky Santos da Silva" email="info.kaiky@gmail.com"/>
                </tbody>
            </table>
        </div>
    )
}

export default Table;