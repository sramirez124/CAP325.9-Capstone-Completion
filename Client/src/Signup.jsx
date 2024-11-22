import { useState } from 'react'

function Signup() {
    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                <form action="">
                    <div>
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Name Here'
                        name = "name"
                        className='form-name'
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
                </form>
            </div>
        </div>
    )
}