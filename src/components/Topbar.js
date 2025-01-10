import React from 'react';
import './Topbar.css';

function Topbar({ toggleSidebar }) {
    return (
        <div className="topbar">
            <button className="toggle-button" onClick={toggleSidebar}>
                {">"}
            </button>
            <h1 className="topbar-title">Minha Aplicação</h1>
        </div>
    );
}

export default Topbar;
