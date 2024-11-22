import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users/login/id', {email, password})
        .then(result => {
            console.log(result.data)
            if (result.data === "Success") {
                navigate('/Home')
            }})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <h2>Welcome Back!</h2>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
                <p>Don't have an account? <a href="/Signup">Sign Up Here</a></p>
            </div>
        </div>
    )
}

export default Login