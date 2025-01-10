import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Card from './components/Card';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app">
            <Sidebar isOpen={sidebarOpen} />
            <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <Topbar toggleSidebar={toggleSidebar} />
                <div className="container">
                    <div className="cards">
                        <Card title="Card 1" />
                        <Card title="Card 2" />
                        <Card title="Card 3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
