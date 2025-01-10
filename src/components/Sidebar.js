import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <h2 className="sidebar-title">Menu</h2>
            <ul className="sidebar-menu">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
}

export default Sidebar;
