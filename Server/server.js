import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

// connect to db
await mongoose.connect(process.env.ATLAS_URI)
console.log("Connected to MongoDB!")

// Pulling in Models
import Task from './Models/Task.js'
import User from './Models/User.js'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
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

// GET by ID
app.get('/users/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// GET Users Task
app.get('/users/:id/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({user: req.params.id})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).send(error)
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