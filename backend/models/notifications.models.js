// models/notification.model.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfileDetails', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfileDetails' },
  type: { type: String, enum: ['answer', 'comment', 'mention'], required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  answerId: { type: mongoose.Schema.Types.ObjectId }, // for comment or mention
  message: { type: String },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
