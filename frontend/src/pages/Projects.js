import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projetos</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Início</th>
                        <th>Fim</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{new Date(project.startDate).toLocaleDateString()}</td>
                            <td>{new Date(project.endDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Projects;