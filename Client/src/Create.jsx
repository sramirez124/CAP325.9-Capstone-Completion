import { useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState('')
  const handleAdd = () => {
    axios.post('http://localhost:3001/tasks', {task: task})
    .then(result => console.log(result.data))
    .catch(error => console.log(error))
  }

  return (
    <div className='create_form'>
      <input type="text"  placeholder='Enter Task Here' onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create