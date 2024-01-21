import React from 'react';
import './perfil.css';
import HeaderGame from '../../pages/headergames/headergames';
import Footer from '../../pages/footer/footer';

export default function Perfil(){
    return(
        <>
            <HeaderGame/>
            <section id='perfil'>
                <h1>Informações Pessoal.</h1>
                <div id='infoPessoal'>
                    <input id='nome' type='value'/>
                    <input id='dataNascimento' type='value'/>
                    <input id='telefone' type='value' placeholder='ola'/>

                </div>
            </section>
            <Footer/>
        </>
    );
};
