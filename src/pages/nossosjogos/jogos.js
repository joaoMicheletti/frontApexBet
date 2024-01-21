import React from "react";
import './jogos.css';
import Rocket from '../../image/rocket.png';
import Ouro from '../../image/ouro.png';
import Bomb from '../../image/bomb.png';

export default function NossosJogos(){
    return(
        <div>
            <div id="NossosJogos">
                <br/>
                <p id="aboutgamos">Conheça nossos Jogos!</p>
                <br/>
                <div id="Games">
                    <div className="galaxy" id="Jogo">
                        <img src={Rocket} alt="jogo"/>
                        <p id="nomegame">Next Galaxy</p>
                    </div>
                    <div id="Jogo">
                        <img src={Ouro} alt="jogo"/>
                        <p href id="nomegame">Fortune Coin</p>
                    </div>
                    <div id="Jogo">
                        <img src={Bomb} alt="jogo"/>
                        <p id="nomegame">Mine</p>
                    </div>
                </div>
            </div>
        </div>
    );
};