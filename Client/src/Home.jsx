import { useState } from 'react'
import Create from "./Create";

function Home() {
    const [tasks, setTasks] = useState([]);
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
                    </div>
                ))
            }
        </div>
    );
}

export default Home