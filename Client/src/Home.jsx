import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Create from "./Create";
import axios from 'axios'
import './App.css'
import Toggle from './Toggle'

function Home() {
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState(false);
    let id = useParams().id
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}/tasks`)
        .then(result => setTasks(result.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className="App" data-theme={theme ? 'dark' : 'light'}>
            <Toggle
                isChecked={theme}
                handleChange={() => setTheme(!theme)}
            />
            <h2 className='title'>Herculean Task List</h2>
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