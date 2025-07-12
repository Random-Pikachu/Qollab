const express = require('express')
const { getQuestions, postQuestions, getQuestionById } = require('../controllers/question.controller')
const router = express.Router()

router.get('/', getQuestions)
router.post('/', postQuestions)
router.get('/:id', getQuestionById)
module.exports = router