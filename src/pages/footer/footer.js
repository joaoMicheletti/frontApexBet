import React from "react";
import Logo from '../../image/Casino.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import './footer.css';

export default function Footer(){
    return(
        <div>
            <div id="Footer">
                <div>
                    <img src={Logo} about="logo casino"/>
                    <h3>ApexBet</h3>
                    <p id="direitos">Todos os direitos Reservador 2024</p>
                </div>
                <div id="SocialMidia">
                        <FaInstagram id="md" color="white" size="40px"/> 
                        <FaFacebook id="md" color="white" size="40px"/> 
                        <FaXTwitter id="md" color="white" size="40px" /> 
                </div>
                <div id="Suport">
                <FaHandsHelping size="60px" id="md" color="white" />
                <p>Suporte 24 H / Dias</p>
                </div>
            </div>
        </div>
    );
};