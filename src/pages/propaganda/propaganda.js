import React from "react";
import './propaganda.css';
import RoletaProp from '../../image/Roulette.webp';
export default function Propaganda(){
    return(
        <div>
            <div id="Prop">
                <div id="one">
                    <br/>
                    <h1>Bem-vindo ao ApexBet!</h1>
                    <p>Cadastre-se e receba<br/>
                        bônus de depósito de <br/>
                        até R$ 50!
                    </p>
                    <button id="BtnCad"><a href="/register">Registrar-se</a></button>                 
                </div>  
                <div id="two">
                    <img src={RoletaProp} alt="prop img" />
                </div>             
            </div>
        </div>
    );
};