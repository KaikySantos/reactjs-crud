import React, { useState, useEffect } from 'react';
import './styles.css';

import TableRow from '../TableRow';
import api from '../../../services/api';

function Table() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api("/users").then((response) => {
          setUsers(response.data);
        });
    })

    return (
        <div className="table">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(
                    users.map((user) => (
                        <TableRow key={user.id} id={user.id} name={user.name} email={user.email}/>
                    ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;