import React from 'react';
import './styles.css';

import IconUpdate from '../../../assets/images/update.png';
import IconDelete from '../../../assets/images/delete.png';

function TableRow(props) {
    return(
        <tr>
            <td>1</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td className="actions">
                <div className="btn-action"><img src={IconUpdate}/></div>
                <div className="btn-action"><img src={IconDelete}/></div>
            </td>
        </tr>
    )
}

export default TableRow;