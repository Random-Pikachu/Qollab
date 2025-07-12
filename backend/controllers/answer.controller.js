const Question = require("../models/questions.models");
// const Answers = require("../models/answers.models");
const User = require("../models/User"); // or user.models.js

exports.getAnswers = async (req, res) => {
  const { questionId } = req.params;

  try {
    const question = await Question.findById(questionId).populate('author');

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question.answers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postAnswer = async (req, res) => {
  const { questionId } = req.params;
  const { description, author } = req.body; // author is username

  try {
    const question = await Question.findById(questionId).populate('author');
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Find user by username
    const user = await User.findOne({ username: author });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newAnswer = {
      description,
      author: user._id, // Use ObjectId
      createdAt: new Date(),
      upvotes: 0,
      downvotes: 0,
    };

    question.answers.push(newAnswer);
    await question.save();

    // await createNotification({
    //   recipient: question.author,
    //   sender: req.user._id,
    //   type: "answer",
    //   questionId: question._id,
    //   message: `${req.user.username} answered your question.`,
    // });

    res.status(201).send({ message: "Answer added", answer: newAnswer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
