import { useState } from 'react'

function Login() {
    return (
        <div>
            <div>
                <h2>Welcome Back!</h2>
                <form action="">
                    <div>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" 
                        placeholder='Enter Email Here'
                        name = "email"
                        className='form-email'
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