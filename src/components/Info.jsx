import React from "react";
import foto from "../assets/foto-perfil.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info(){
    return (
        <div className="info">
            <img className="info--image" src={foto} alt="foto de perfil" />
            <h1 className="info--name">Abel Pinheiro de Figueiredo</h1>
            <h2 className="info--title">Software Engineer</h2>
            <h3 className="info--website">abelpinheiro.com</h3>
            <button className="button">Email</button>
        </div>
    )
}
