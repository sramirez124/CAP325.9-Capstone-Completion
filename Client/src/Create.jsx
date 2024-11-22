import { useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState('')
  // TODO - Add a way update these values
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')
  const handleAdd = () => {
    axios.post('http://localhost:3000/tasks', {task: task})
    .then(result => console.log(result.data))
    .catch(error => console.log(error))
  }

  return (
    <div className='create_form'>
      <input type="text"  placeholder='Enter Task Here' onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
      {/* // TODO - Add a way to update these values */}
    </div>
  )
}

export default Create