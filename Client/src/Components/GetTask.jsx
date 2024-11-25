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
                    <div>
                        <h3 className='task-title'>{task.title}</h3>
                    </div>
                    
                    <p className='task-description'>{task.description}</p>
                    <p className='task-priority'>Priority: {task.priority}</p>
                    <p className='task-due-date'>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                </div>
            ))
        }
        </div>
    )
}

export default GetTask