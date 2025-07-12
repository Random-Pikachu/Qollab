import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import api from '../connection'
import QuestionCard from '../components/QuestionCard'
const Home = () => {

  const [questions, setQuestions] = useState([])


  useEffect(() => {
    api.get('/questions').then((res) => {
      // Sort questions by createdAt descending (latest first)
      const sortedQuestions = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setQuestions(sortedQuestions)
    })
  }, [])
  return (
    <>
      <div className='flex flex-row mt-10'>

        <div className='w-3/4'>
          <div className='flex flex-col'>
            {questions.map((question) => (
              <div key={question._id}>
                <QuestionCard question={question} />
              </div>
            ))}
          </div>
        </div>
          <div className='w-1/4 '>
              <SideBar />
          </div>
      </div>
    </>
  )
}

export default Home