import React from "react";
import './register.css';
import Header from "../header/header";
import Footer from "../footer/footer";
export default function Login(){
    return(
        <div>
            <Header/>
            <div id="Form">
                <h1>Cadastrar-se</h1>
                <p>Nome</p>
                <input type="text" placeholder="Nome"/>
                <p>Data de Nascimento</p>
                <input type="date"/>
                <p>Telefone</p>
                <input type="text" placeholder="Phone number"/>
                <p>Senha</p>
                <input type="password" placeholder=" Senha"/><br/>
                <p>Confirmar Senha</p>
                <input type="password" placeholder="Confirmar SEnha"/>
                <button>Cadastrar-se</button>
            </div>
            <Footer/>
        </div>
    );
};