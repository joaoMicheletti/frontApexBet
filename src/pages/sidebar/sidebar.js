import React from "react";
import Rocket from '../../image/rocket.png';
import Ouro from '../../image/ouro.png';
import Bomb from '../../image/bomb.png';
import './sidebar.css';
export default function SideBar(){
    return(
        <div>
            <div id="Bar">
                <p>Casino</p>
                <img src={Rocket} alt="jogo"/>
                <a href="/galaxy" >Next Galaxy</a>
                <img src={Ouro} alt="jogo"/>
                <a href="/coin" >Furtune Coin</a>
                <img src={Bomb} alt="jogo"/>
                <a href="/mine" >Minas</a>
            </div>
        </div>
    );
};