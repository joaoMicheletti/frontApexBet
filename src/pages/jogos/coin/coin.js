import React from "react";
import './coin.css';
import prata from '../../../image/prata.png';
import ouro from '../../../image/ouro.png';
import AnimationCoin from '../../../image/animationcoin.gif';
import HeaderGames from "../../headergames/headergames";
import Footer from "../../footer/footer";


export default function Coin(){

    //função de sleep 
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    async function Prata(){
        //instânciar a img
        var image = document.querySelector('#coinImg');
        image.setAttribute("src", `${AnimationCoin}`);
        //verificar a aposta, se é um número valido.
        var txtAposta = document.querySelector('#valor').value;
        if( txtAposta === ''){
            alert('Defina uma aposta valida!'); 
            window.location.reload();        
        } else{
            var campoAposta = parseFloat(document.querySelector('#valor').value);
            if( campoAposta == NaN){
                alert('Defina uma aposta valida!');
            } else if (campoAposta < 1) {
                alert('Defina uma aposta valida!');
                window.location.reload();
            };
            //debitar da conta do usuario ou indicar um deposito
            document.querySelector("#Result").innerHTML = "Girando......"
            //chamar a funcão de descanço;
            await sleep(5000);
            var lado = Math.floor(Math.random() * 2);
            //0 = parata e 1 = ouro;
            if(lado === 0){
                image.setAttribute("src", `${prata}`);
                document.querySelector("#Result").innerHTML = `You Win:  ${campoAposta * 2}R$`
            }else{
                image.setAttribute("src", `${ouro}`);
                document.querySelector("#Result").innerHTML = `You Loss`
            };
            //alert(lado);
        };
    };
    async function Ouro(){
        //instânciar a img
        var image = document.querySelector('#coinImg');
        image.setAttribute("src", `${AnimationCoin}`);
        //verificar a aposta, se é um número valido.
        var txtAposta = document.querySelector('#valor').value;
        if( txtAposta === ''){
            alert('Defina uma aposta valida!'); 
            window.location.reload();        
        } else{
            var campoAposta = parseFloat(document.querySelector('#valor').value);
            if( campoAposta == NaN){
                alert('Defina uma aposta valida!');
            } else if (campoAposta < 1) {
                alert('Defina uma aposta valida!');
                window.location.reload();
            };
            //debitar da conta do usuario ou indicar um deposito
            document.querySelector("#Result").innerHTML = "Girando......"
            //chamar a funcão de descanço;
            await sleep(5000);
            var lado = Math.floor(Math.random() * 2);
            //0 = parata e 1 = ouro;
            if(lado === 1){
                image.setAttribute("src", `${ouro}`);
                document.querySelector("#Result").innerHTML = `You Win:  ${campoAposta * 2}R$`
            }else{
                image.setAttribute("src", `${prata}`);
                document.querySelector("#Result").innerHTML = `You Loss`
            };
            //alert(lado);
        };
    };
    return(
        <>
        <HeaderGames/>
        <section id="fortuneCoin">
            <div id="coinGame">
                <p id="Result"></p>
                <div id="img">
                    <img id="coinImg" src={AnimationCoin} alt="GameCoin"/>
                </div>
                <div id="gameplayCoin">
                    <input id="valor" type="number" placeholder="Aposta"/>
                    <p>Multiplicador 2X</p>
                    <button id="prata" onClick={Prata}>Prata</button>
                    <button id="ouro" onClick={Ouro}>Ouro</button>
                </div>
            </div>
            
        </section>
        <Footer/>
        </>
    );
};