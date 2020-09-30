import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';
import './styles.css';

function Form(){
    const history = useHistory();

    const [typeSubmit, setTypeSubmit] = useState("CADASTRAR");
    const [data, setData] = useState({
        name: "",
        email: "",
    });

    const { id } = useParams();
    useEffect(() => {
        if(id !== undefined){
            api("/users").then((response) => {
                const usersForMap = response.data;
                usersForMap.map((user) => {
                    if(user.id == id){
                        setData({name: user.name, email: user.email});
                    }
                });
            });
            setTypeSubmit("EDITAR");
        }
    }, [id]);

    function Submit(e){
        e.preventDefault();
        if(id === undefined){
            api.post("/users", data);
            setData({name:"",email:""});
        }else{
            api.put(`/users/${id}`, data);
            setData({name: "", email: ""});
            history.push("/");
        }
    }
    function handleInput(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return(
        <div className="form">
            <form onSubmit={Submit}>
                <p>Nome:</p>
                <input id="name" type="text" name="name" onChange={handleInput} value={data.name}/>
                <p>Email:</p>
                <input id="email" type="email" name="email" onChange={handleInput} value={data.email}/>
                <button type="submit">{typeSubmit}</button>
            </form>
        </div>
    )
}

export default Form;