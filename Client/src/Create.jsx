import { useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CreateModal from './Components/CreateModal'

function Create() {
  let id = useParams().id
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')

  
  const handleAdd = (e) => {
    axios.post('http://localhost:3000/tasks', {title, description, priority, dueDate, id})
    .then(result => console.log(result.data))
    .catch(error => console.log(error))
  }

  return (
    <div className='create_form'>
      <form onSubmit={handleAdd}>
                    <div>
                        <label htmlFor="title">
                            <strong>Title</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Task Here'
                        name = "title"
                        className='form-title'
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">
                            <strong>Description</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Description Here'
                        name = "description"
                        className='form-description'
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="dueDate">
                            <strong>Due Date</strong>
                        </label>
                        <input type="date" 
                        name = "dueDate"
                        className='form-dueDate'
                        onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="priority">Priority
                            <select onChange={(e) => setPriority(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </label>
                    </div>
                    <div>
                    {/* <button type="submit" className='add-button' onClick={handleAdd}>Add</button> */}
                    </div>
                    
                </form>
      


      
    </div>
  )
}

export default Create