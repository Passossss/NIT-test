import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

function App() {
    return (
        <div className="container">
            <h1>NIT Teste</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/tasks">Tarefas</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
            <footer>
                &copy; 2023 NIT Teste
            </footer>
        </div>
    );
}

export default App;