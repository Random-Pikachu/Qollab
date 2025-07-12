const mongoose = require('mongoose')


const answerSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    upvotes:{
        type: Number,
        default: 0
    },
    downvotes:{
        type: Number,
        default: 0
    }
})


const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes:{
        type: Number,
        default: 0
    },
    downvotes:{
        type: Number,
        default: 0
    },
    answers:{
        type: [answerSchema],
        default: []
    },
    tags:{
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question