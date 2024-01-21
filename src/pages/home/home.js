import React from "react";
import Header from '../../pages/header/header.js';
import SideBar from '../../pages/sidebar/sidebar.js';
import Propaganda from '../../pages/propaganda/propaganda.js';
import Pagamento from "../../pages/pagamento/pagamento.js";
import Nossosjogos from '../../pages/nossosjogos/jogos.js';
import Footer from '../../pages/footer/footer.js';

export default function Home(){
    return(
        <div>
            <Header/>
            <SideBar/>
            <Propaganda/>
            <Pagamento/>
            <Nossosjogos/>
            <Footer/>
        </div>
    );
};