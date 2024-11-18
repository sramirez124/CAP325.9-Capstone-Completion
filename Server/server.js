import express from 'express'
import mongoose from 'mongoose'
import "dotenv/config"

const app = express()
const PORT = process.env.PORT

// connect to db
await mongoose.connect(process.env.ATLAS_URI)
console.log("Connected to MongoDB!")

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
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