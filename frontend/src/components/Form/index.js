import React from 'react';
import './styles.css';

function Form(){
    return(
        <div className="form">
            <form>
                <p>Nome:</p>
                <input id="name" type="text" name="name"/>
                <p>Email:</p>
                <input id="email" type="email" name="email"/>
                <button type="submit">CADASTRAR</button>
            </form>
        </div>
    )
}

export default Form;