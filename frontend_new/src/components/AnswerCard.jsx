import React from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

const AnswerCard = ({ answer }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-md shadow-sm p-4 mb-4 flex flex-row mx-auto w-[700px]"
    >
      {/* Upvote/Downvote Section */}
      <div className="flex flex-col items-center justify-center mr-4">
        <button className="text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none flex justify-center">
          <FaCaretUp />
        </button>
        <span className="text-gray-700 font-semibold my-1">{answer.upvotes - (answer.downvotes || 0)}</span>
        <button className="text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none flex justify-center">
          <FaCaretDown />
        </button>
      </div>
      {/* Answer Content */}
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <span className="text-sm font-semibold text-gray-800 mr-2">{answer.author.username}</span>
          <span className="text-xs text-gray-400">
            {answer.createdAt ? new Date(answer.createdAt).toLocaleString() : ""}
          </span>
        </div>
        <div className="text-gray-900 text-base">
          {answer.description}
        </div>
      </div>
    </div>
  )
}

export default AnswerCard