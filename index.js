const express = require('express')
const app = express()
const mongoose = require('mongoose')
//imports
const taskRouter = require('./routes/task.routes')
//db connection
const db = require('./db')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs');
const port = 8000;

app.get('/', (req, res) => {
    // Render the EJS template and send it as a response
    res.render('index');
});

if (db()) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    }
    )
}


app.use('/api/v1/tasks', taskRouter)

