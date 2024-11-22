import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Create from "./Create";
import axios from 'axios'

function Home() {
    const [tasks, setTasks] = useState([]);
    let id = useParams().id
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}/tasks`)
        .then(result => setTasks(result.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>Herculean Task List</h2>
            <Create />
            {
                tasks.length === 0 ? <p>You have no task!</p> :
                tasks.map(tasks => (
                    <div>
                        <h3>{tasks.title}</h3>
                        <p>{tasks.description}</p>
                        <p>Priority: {tasks.priority}</p>
                        <p>Due Date: {tasks.dueDate}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home