import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send('Task manager')
})

app.listen(process.env.port, console.log('Service listing'))