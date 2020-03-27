import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data[0].name);
            history.push("/profile")
        } catch (err){

            console.log("error");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
               <img src={logoImg} alt="Be the hero"/>
               <form onSubmit={handleLogin}>
                   <h1>Faca seu login</h1>

                   <input 
                        type="text" 
                        placeholder="Sua ID"
                        onChange={e => setId(e.target.value)}
                    />

                   <button className="button">Entrar</button>

                   <Link className="back-link" to="/register">
                       <FiLogIn size="16" color="#e02041" />
                       Nao tenho cadastro
                    </Link>
               </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div> 
    )
}