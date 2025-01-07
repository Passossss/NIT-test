import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Tarefas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <input type="checkbox" checked={task.completed} />
                        {task.name} - {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;