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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})