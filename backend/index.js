const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const Question = require('./models/questions.models')
const connectDb = require('./db/connectDb')
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/question.routes')
const app = express()

dotenv.config()
// CORS configuration - MUST come before routes
app.use(cors({
  origin: ['http://localhost:5173', 'https://accounts.google.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDb()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
require('./config/passport')(passport); 

app.use(express.json())


app.use('/api/questions', questionRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 4600

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})




