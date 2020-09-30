import React from 'react';
import './styles.css';

import IconUpdate from '../../../assets/images/update.png';
import IconDelete from '../../../assets/images/delete.png';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

function TableRow(props) {

    function DeleteUser(id){
        api.delete(`/users/${id}`);
    }

    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td className="actions">
                <Link to={"/"+props.id} className="btn-action"><img src={IconUpdate}/></Link>
                <Link to={"/"} className="btn-action" onClick={() => DeleteUser(props.id)}><img src={IconDelete}/></Link>
            </td>
        </tr>
    )
}

export default TableRow;