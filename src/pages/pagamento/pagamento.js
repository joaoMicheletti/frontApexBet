import React from "react";
import './pagamento.css';
import Pix from '../../image/pix.png';
export default function Pagamento(){
    return(
        <div>
            <div id="pagamento">
                <br/>
                <img id="pix" src={Pix} alt="logo pix"/>
                <div id="txt">
                    <p>
                    Método de pagamento preferido<br/>
                    </p>
                </div>
            </div>
        </div>
    );
};