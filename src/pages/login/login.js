import React from "react";
import './login.css';
import Header from "../header/header";
import Footer from "../footer/footer";
export default function Login(){
    return(
        <div>
            <Header/>
            <div id="Form">
                <h1>Login</h1>
                <p>Telefone</p>
                <input type="text" placeholder="Phone number"/>
                <p>Senha</p>
                <input type="password" placeholder=" Senha"/><br/>
                <button>Entrar</button>
            </div>
            <Footer/>
        </div>
    );
};