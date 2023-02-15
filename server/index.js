const express = require('express')
const app = express()



// routes
app.get('/', (req, res) => {
    res.send('Task Manager')
})

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new tasks
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update tasks
// app.delete('/api/v1/tasks/:id') - delete task



const port = 3000

app.listen(port, console.log(`Server working on ${port}...`))