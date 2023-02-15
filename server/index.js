import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import tasks from './routes/tasks'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send(tasks)
})


app.listen(process.env.port, console.log('Service listing'))