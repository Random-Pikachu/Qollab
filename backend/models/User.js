const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  username: String,
  email: String,
  password: String,
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
});

module.exports = mongoose.model('User', UserSchema);
