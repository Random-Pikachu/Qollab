// controllers/notifications.controller.js
const Notification = require('../models/notification.model');

exports.createNotification = async ({ recipient, sender, type, questionId, answerId, message }) => {
  const notification = new Notification({ recipient, sender, type, questionId, answerId, message });
  await notification.save();
};

exports.getUserNotifications = async (req, res) => {
  const userId = req.user._id; // assuming authentication middleware

  const notifications = await Notification.find({ recipient: userId })
    .sort({ createdAt: -1 })
    .limit(10)
    .populate('sender', 'username');

  const unreadCount = notifications.filter(n => !n.isRead).length;

  res.json({ notifications, unreadCount });
};

exports.markNotificationsRead = async (req, res) => {
  const userId = req.user._id;
  await Notification.updateMany({ recipient: userId, isRead: false }, { isRead: true });
  res.sendStatus(200);
};



