import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import tasks from './routes/tasks'

const app = express()
dotenv.config()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Task manager')
})

app.use('api/vi/tasks', tasks)

app.listen(process.env.port, console.log('Service listing'))