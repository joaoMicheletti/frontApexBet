import React from "react";
import './mine.css';
import HeaderGames from "../../headergames/headergames";
import Footer from "../../footer/footer";
import goldBox from '../../../image/goldBox.png';
import bomb from '../../../image/bomb.png';

export default function mine(){

    function Start(){
        var valor0 = Math.floor(Math.random() * 12);
        var valor1 = Math.floor(Math.random() * 12);
        while( valor0 === valor1 ){
            valor1 = Math.floor(Math.random() * 12);
        };
        var valores = {
            valor0,
            valor1,
        };
        return valores;
    };
    var valores = Start(); // valores retornados;
    //iniciar a variavel aposta.
    var aposta = 0;
    async function Aposta(){
        //verificar a aposta, se é um número valido.
        var txtAposta = document.querySelector('#aposta').value;
        if( txtAposta === ''){
            alert('Defina uma aposta valida!'); 
            window.location.reload();        
        } else{
            alert('Boa Sorte!!!')
            var campoAposta = parseFloat(document.querySelector('#aposta').value);
            if( campoAposta == NaN){
                alert('Defina uma aposta valida!');
            } else if (campoAposta < 1) {
                alert('Defina uma aposta valida!');
            };
        };
        return aposta += campoAposta;
        //debitar a aposta da conta do usuario caso ele tenha o valor.
        //retornar o valor da aposta
        //caso não tenha o valor solicitar um deposito; 
    };
    //seguir com o jogo

    // Inicialize acertos fora do escopo da função para que possa ser acessado e modificado
    var acertos = {acerto: 0};

    function jogada(evento){
        if(aposta === 0){
            alert('Defina uma aposta Valida!!!');
            window.location.reload();
        }
        // pegando o id da div selecionada.
        var idDiv = evento.target.id;
        //definir o valor da varoiável como o id onde a mina esta.
        var mina0 = '_'+valores.valor0;
        var mina1 = '_'+valores.valor1;
        
        if(idDiv ===  mina0 || idDiv === mina1){
            //explodir;
            //instância da div;
            var elementoDiv = document.querySelector('#'+ idDiv);
            elementoDiv.style.backgroundImage = `url(${bomb})`;
            alert('Mais Sorte na Próxima!!!');
            //time para rrecarregar.
            setTimeout(() => {
                window.location.reload();
            }, 100);
            //finalizar o jogo.
        } else {
            // pegar o valor da aposta e dividir por 10
            //miltiplicar os acertos por2 2
            //calculo == (aposta / 10) * (acertos * 2) = lucro
            //instânciando a div
            var elementoDiv = document.querySelector('#'+ idDiv);
            //mudando a img
            elementoDiv.style.backgroundImage = `url(${goldBox})`;
            //mostrar para o jogador o valor da jogada;
            elementoDiv.innerHTML += `${aposta / 10}R$`;
            // Atualizar acertos.
            acertos.acerto += 1;
            var multiplicador = acertos.acerto * 2;
            var lucroJogador = (aposta / 10) * multiplicador;
        };
        return acertos;
    };
    return(
        <>
        <HeaderGames/>
        <section id="mine">
            <div id="gameMine">
                <div className="cardsArea">
                    <div id="_0" className="block" onClick={jogada} >  </div>
                    <div id="_1" className="block" onClick={jogada} >  </div>
                    <div id="_2" className="block" onClick={jogada} >  </div> 
                    <div id="_3" className="block" onClick={jogada} >  </div>                  
                </div>
                <div className="cardsArea">
                    <div id="_4" className="block" onClick={jogada} >  </div>
                    <div id="_5" className="block" onClick={jogada} >  </div>
                    <div id="_6" className="block" onClick={jogada} >  </div>
                    <div id="_7" className="block" onClick={jogada} >  </div> 
                </div>
                <div className="cardsArea">
                    <div id="_8" className="block" onClick={jogada} >  </div>
                    <div id="_9" className="block" onClick={jogada} >  </div>
                    <div id="_10" className="block" onClick={jogada} >  </div>
                    <div id="_11" className="block" onClick={jogada} >  </div> 
                </div>
            </div>
            <div id="mineGamePlay">
                <input type="number" id="aposta" placeholder="Aposta minima 1,00R$ "/>
                <button onClick={Aposta} id="start">Start</button> 
            </div>
        </section>
        <Footer/>
        </>
    );
};

