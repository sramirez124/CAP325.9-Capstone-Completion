import { useState } from 'react'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users', {name, email, password})
        .then(result => console.log(result.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Name Here'
                        name = "name"
                        className='form-name'
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" 
                        placeholder='Enter Email Here'
                        name = "email"
                        className='form-email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" 
                        placeholder='Enter Password Here'
                        name = "password"
                        className='form-password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='form-submit-button'>
                        Sign Up
                    </button>
                </form>
                <p>Already have an account? <a href="/Login">Login</a></p>
            </div>
        </div>
    )
}

export default Signup