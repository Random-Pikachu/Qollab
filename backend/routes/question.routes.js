const express = require('express')
const { getQuestions, postQuestions } = require('../controllers/question.controller')
const router = express.Router()

router.get('/', getQuestions)
router.post('/', postQuestions)
module.exports = router