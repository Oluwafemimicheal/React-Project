  const mongoose = require('mongoose')
  const dotenv = require('dotenv')
  dotenv.config()

  const connect = process.env.MONGO_CONNECTION

  mongoose.set('strictQuery', false)
  mongoose.connect(connect).then(() => console.log('CONNECTED TO THE DB...')).catch((err) => console.log(err))