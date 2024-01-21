import React from "react";
import './header.css'; 
import Moeda from '../../image/Casino.png';

export default function Header(){
    return(
        <div>
            <div id="header">
                <div id="Luxebet">
                    <img className="LogoHeader" src={Moeda} alt="logo casino"/>
                    <p><a href="/">ApexBet</a></p>
                </div>
                
                
                <div id="nav">
                    <a href="/login">Entrar</a>
                    <button id="Cad"><a href="/register">Cadastrar-se</a></button>
                </div>
            </div>
        </div>
    )};