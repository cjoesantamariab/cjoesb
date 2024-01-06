import React from "react";
import './InfoCard.css';
import horse from "../assets/svg/horse.svg";

const InfoCard = () => {
    return (
        <div className="container">
            <div className="InfoCard">
                <h2>Cristian Joe Santamaria</h2>
                <div className="content"> 
                    <img src={horse} alt="Caballo de ajedrez" width="150" height="150" style={{ cursor: 'pointer' }}/>
                </div>
                <a href="https://www.linkedin.com/in/cristian-santamaria-870841134/"  target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
        </div>
    )
}

export default InfoCard;