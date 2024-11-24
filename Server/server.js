import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import cors from 'cors'
import "dotenv/config"

const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// connect to db
await mongoose.connect(process.env.ATLAS_URI)
console.log("Connected to MongoDB!")

// Pulling in Models
import Task from './Models/Task.js'
import User from './Models/User.js'



app.get('/', (req, res) => {
    redirect('/login')
})

/**
 * GET Routes
 */

// USER ROUTES
app.get('/users', async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

// GET by Task
app.get('/task', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// GET Users Task
app.get('/users/:id/tasks', async (req, res) => {
    const id = req.params.id;
  try {
    const tasks = await Task.find({ userId: id });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
})

/**
 * POST Routes
 */

// Create User
app.post('/users/signup', async (req, res) => {
    try {
      const newUser = await User.create(req.body)
      res.status(200).json(newUser)
    } catch (err) {
      res.send(err).status(400)
    }
  })

// Login Page
app.post('/users/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            res.status(400).send('User not found')
            return
        } 

        if (user){
            if (user.password === password) {
                res.status(200).json(`${user._id}`)
            } else {
                res.status(400).send("Incorrect Information")
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

// Create a Task
app.post('/tasks', async (req, res) => {
    try{
        const {title, description, priority, dueDate, id} = req.body
        const newTask = await Task.create({
            title: title,
            description: description,
            priority: priority,
            dueDate: dueDate,
            userId: id
        })
        const user = await User.findByIdAndUpdate(id, { $push: { tasks: newTask._id } })
        res.status(201).json(newTask)        
    } catch (error) {
        res.send(error).status(400)
    }
})


// Error Handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message)
    res.status(statusCode).send(err.message)
})

// Listen Confirmation
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})