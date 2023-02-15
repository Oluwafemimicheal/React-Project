  const mongoose = require('mongoose')

  const connectionString = 'mongodb+srv://oluwafemi:young4410@cluster0.kau0vbk.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

  mongoose.connect(connectionString).then(() => console.log('CONNECTED TO THE DB...')).catch((err) => console.log(err))