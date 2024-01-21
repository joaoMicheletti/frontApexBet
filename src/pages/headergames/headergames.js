import React from "react";
import './headergames.css';
import Casino from '../../image/Casino.png';
import { FaUserSecret } from "react-icons/fa6";

export default function HeaderGames(){
    return(
        <>
        <div id="galaxyHeader">
            <a href="/"><img  src={Casino} alt="Logo"/></a>
            <div id="profile">
                <FaUserSecret id="profileIcon" size="30px"/> 
                <p id="saldo">saldo $</p>
                <button>Depositar</button>
            </div>
        </div>
        </>
    );
};