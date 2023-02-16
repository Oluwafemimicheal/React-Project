const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.get('/', (req, res) => {
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks)


const PORT = process.env.port
app.listen(PORT, console.log(`Server is now working on ${PORT}...`))