import { useEffect, useState } from 'react'
import Create from "./Create";
import axios from 'axios'

function Home() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/task')
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