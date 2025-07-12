import React from 'react'
import {FaCaretUp, FaCaretDown} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const QuestionCard = ({question}) => {
  const navigate = useNavigate()
  return (
    <>
    <div onClick={() => navigate(`/question/${question._id}`)} className='flex items-center justify-center mb-4'>
    <div className='flex flex-row  bg-white rounded-lg shadow p-4 w-[700px] gap-5'>
        <div className='flex flex-col'>
            <button className="text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none flex justify-center">
                <FaCaretUp />
            </button>
            <p className='text-2xl font-bold font-poppins ml-[5px]'>{question.upvotes + question.downvotes}</p>
            <button className="text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none flex justify-center">
                <FaCaretDown />
            </button>
            
        </div>
    <div className='flex flex-col w-full'>
        <div className='flex flex-row justify-between items-center '>
            <h1 className='text-2xl font-bold'>{question.title}</h1>
            <p className='text-gray-600 mr-7 text-sm'>{question.author.username}</p>
        </div>
        <p className='text-gray-600'>{question.description}</p>
        <div className='flex flex-row gap-2'>
            {question.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
                    {tag}
                </span>
            ))} 
            
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default QuestionCard