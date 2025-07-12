import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../connection'
import QuestionCard from '../components/QuestionCard'
import AnswerCard from '../components/AnswerCard'
import SideBar from '../components/SideBar'
import PostAnswer from '../components/PostAnswer'

const QuestionPage = () => {
    const {id} = useParams()
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await api.get(`/questions/${id}`)
            setQuestion(response.data)
            const answersResponse = await api.get(`/answers/${id}`)
            setAnswers(answersResponse.data)
        }
        fetchQuestion()
    }, [id])
  return (
    <div className='flex flex-row mt-10 justify-center'>
        <div className='w-3/4'>
            {question ? (
                <QuestionCard question={question} />
            ) : (
                <div>Loading...</div>
            )}
            <PostAnswer />
            {answers.map((answer) => (
                <AnswerCard answer={answer} />
            ))}
        </div>
        <div className='w-1/4 '>
              <SideBar />
        </div>
    </div>
  )
}

export default QuestionPage