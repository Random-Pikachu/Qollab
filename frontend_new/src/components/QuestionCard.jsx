import React from 'react'
import {FaCaretUp, FaCaretDown} from 'react-icons/fa'
const QuestionCard = ({question}) => {
  return (
    <>
    <div className='flex items-center justify-center mb-4'>
    <div className='flex flex-row  bg-white rounded-lg shadow p-4 w-[700px] gap-5'>
        <div className='flex flex-col'>
            <FaCaretUp/>
            <p className='text-2xl font-bold font-poppins ml-[2px]'>{question.upvotes + question.downvotes}</p>
            <FaCaretDown/>
            
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