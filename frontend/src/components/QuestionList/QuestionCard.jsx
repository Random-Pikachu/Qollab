import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question }) => {
  if (!question) return null;
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      {/* Votes */}
      <div className="flex flex-col items-center justify-center w-10">
        <span className="font-bold text-lg text-gray-700">{(question.upvotes || 0) - (question.downvotes || 0)}</span>
        <span className="text-xs text-gray-500">votes</span>
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <Link to={question._id ? `/questions/${question._id}` : '#'}>
          <div className="font-semibold text-base mb-1 cursor-pointer hover:underline">{question.title || 'Untitled Question'}</div>
        </Link>
        <div className="text-sm text-gray-600 mb-2">{question.description || 'No description provided.'}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {(question.tags || []).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700">{tag}</span>
          ))}
        </div>
        <div className="flex items-center text-xs text-gray-500 gap-4">
          <span>{question.answers ? question.answers.length : 0} answers</span>
          <span>{question.createdAt ? new Date(question.createdAt).toLocaleString() : ''}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;