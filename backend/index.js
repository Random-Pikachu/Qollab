const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const Question = require('./models/questions.models')
const connectDb = require('./db/connectDb')
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

connectDb()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 4600


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})



