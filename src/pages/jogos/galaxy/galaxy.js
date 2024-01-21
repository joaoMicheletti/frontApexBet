import React from "react";
import './galaxy.css';
import Footer from "../../footer/footer";
import HeaderGames from "../../headergames/headergames";
//img'S
import rocket from '../../../image/rocket.gif';
import bomb from '../../../image/bomb.gif';
export default function Galaxy(){
    var intervalo;
    var Aposta = 0;
    function Start(){
        //varificar aposta
        //instância da aposta 
        var campoAposta = document.querySelector('#aposta').value;
        if(campoAposta === ''){
            alert('Defina uma aposta válida')
            window.location.reload();
        }
        var aposta = parseFloat(campoAposta);
        if(aposta === NaN){
            alert("Defina uma aposta válida");
            window.location.reload();
        } else if(aposta < 1){
            alert("Defina uma aposta válida!!!");
            window.location.reload();
        } else {
            // verificar se o usuário tem o valo.
            //se nao sugira um deposito;
        };

        //instsancia de foguete
        var fogueteImg = document.querySelector("#rocket");
        //iniciar lançamento;
        fogueteImg.setAttribute("src",`${rocket}`);
        alert(aposta)


        //destino
        var destino = Math.floor(Math.random() * 21);
        alert(destino)

        //contador
        var contador = document.querySelector("#destino");
        // Iniciar uma contagem de 0 até o valor gerado como float
        var i = 0;
        intervalo = setInterval(function () {
            contador.innerHTML =  i.toFixed(2); // Limita a duas casas decimais
            i += 0.1; // Incrementa em 0.1 como float
            if (i > destino) {
                clearInterval(intervalo); // Interrompe a contagem quando atinge o valor gerado
                //explodir o foguete.
                fogueteImg.setAttribute("src",`${bomb}`);
                document.querySelector("#destino").innerHTML = 'You Loss';
            }
        }, 500);
        return Aposta += aposta;
    };
    function Stop() {
        clearInterval(intervalo);
        //pegar o valor de h1 e verificar se é menor que o destino;
        var parada = document.querySelector("#destino").textContent;
        //convertendo para numero a string
        var paradaNumber = parseFloat(parada);
        var lucroJogador = Aposta * paradaNumber.toFixed(2);
        alert(paradaNumber.toFixed(2));
        alert(Aposta)
        alert(lucroJogador.toFixed(2));
        // se menor pagar recompensa.
    };
    return(
        <>
        <HeaderGames/> 
        <section id="gameGalaxy">
            <h1 id="destino"></h1>
            <div id="galaxy">
                <img id="rocket" />
                <p>Number</p>
            </div>
            <div id="gameplay">
                <input type="number" id="aposta" placeholder="Aposta"/>
                <button id="start" onClick={Start}>Start</button>
                <button id="stop" onClick={Stop} >Stop</button>
            </div><br/>
        </section>
        <Footer/>
        </>
    );
};