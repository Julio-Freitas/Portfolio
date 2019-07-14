import React from 'react' ;
import './style.css';

export const Card = (props) => (
    <div>
        <img className="imagem-frase" src={props.background} alt="Imagem"/>
        <p className="texto-autor">{props.autor}</p>
        <p className="texto-frase">{props.quote}</p>
    </div>
);