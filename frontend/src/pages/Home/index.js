import React from 'react';
import Form from '../../components/Form';
import Table from '../../components/List/Table';
import './styles.css';

function Home(){
    return (
        <div className="container">
            <Form/>
            <Table/>
        </div>
    )
}

export default Home;