const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
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