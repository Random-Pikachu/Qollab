const Question = require('../models/questions.models')

exports.getQuestions = async (req, res) => {
    
    try {
        const questions = await Question.find().populate('author')
        res.status(200).json(questions)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.postQuestions = async (req, res) => {
    const { title, description, tags, author } = req.body
    const question = new Question({ title, description, tags, author })
    await question.save()
    res.status(201).json(question)
}

exports.getQuestionById = async (req, res) => {
    const { id } = req.params
    const question = await Question.findById(id).populate('author')
    res.status(200).json(question)
}

