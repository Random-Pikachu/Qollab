const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    karma:{
        type: Number,
        default: 0
    },
    questions:{
        type: Array,
        default: []
    },
    answers:{
        type: Array,
        default: []
    },
    bookmarks:{
        type: Array,
        default: []
    },
    notifications:{
        type: Array,
        default: []
    }
})


const User = mongoose.model('UserProfileDetails', userSchema)

module.exports = User