import { useState, useEffect } from 'react'
import axios from 'axios'

function GetTask({id}) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
            axios.get(`http://localhost:3000/users/${id}/tasks`)
            .then(response => setTasks(response.data))
            .catch(error => console.error(error))
            console.log(tasks)
        }, [id])

    return (
        <div className="task-list" >
            {
            tasks.length === 0 ? <p>You have no task!</p> :
            tasks.map(task => (
                <div key={task._id} className='task'>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                </div>
            ))
        }
        </div>
    )
}

export default GetTask