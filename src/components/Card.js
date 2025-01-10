import React from 'react';
import './Card.css';

function Card({ title }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Conteúdo do card aqui.</p>
        </div>
    );
}

export default Card;
