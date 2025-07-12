const express = require('express')
const { getAnswers, postAnswer } = require('../controllers/answer.controller')
const router = express.Router()

router.get('/:questionId', getAnswers)
router.post('/:questionId', postAnswer)
module.exports = router