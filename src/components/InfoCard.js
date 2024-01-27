import React from "react";
import './InfoCard.css';
import logo from "../assets/svg/caas.svg";

const InfoCard = () => {
    const phoneNumber = "+50498582668";
    const iconStyle = {
        fontSize: '2rem', // Puedes ajustar el tamaño según tus preferencias
        marginRight: '10px', // Espacio entre los iconos
        color: 'black',
    };
    return (
        <div className="container">
            <div className="InfoCard">
                <h2 className="centrar1">Cristian Joel Santamaria</h2>
                <div className="content"> 
                    <img src={logo} alt="log" className="centrar2" style={{ cursor: 'pointer' }}/>
                </div>
                <div className="centrar1">
                    <a href="https://www.linkedin.com/in/cristian-santamaria-870841134/" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-linkedin" style={iconStyle}></i>
                    </a>
                    <a href="https://www.instagram.com/cristianjoel7202/" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-instagram" style={iconStyle}></i>
                    </a>
                    <a href="https://github.com/cjoesantamariab" target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-github" style={iconStyle}></i>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`} target="_blank" rel="noopener noreferrer">
                        <i className="pi pi-whatsapp" style={iconStyle}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;