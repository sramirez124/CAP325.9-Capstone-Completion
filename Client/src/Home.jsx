import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Create from "./Create";
import axios from 'axios'
import './App.css'

function Home() {
    const [tasks, setTasks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}/tasks`)
        .then(response => setTasks(response.data))
        .catch(error => console.error(error))
        console.log(tasks)
    }, [id])

    return (
        <div className="App">
            <h2 className='title'>Herculean Task List</h2>
            <Create />
            {
                tasks.length === 0 ? <p>You have no task!</p> :
                tasks.map(task => (
                    <div key={task._id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Due Date: {task.dueDate}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home