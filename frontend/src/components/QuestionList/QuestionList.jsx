import React from 'react';
import QuestionCard from './QuestionCard';

const questions = [
  {
    id: 1,
    title: 'How to implement JWT authentication in React applications?',
    summary: 'I\'m building a React app and need to implement secure user authentication using JWT tokens. What\'s the best approach for storing and managing tokens?',
    tags: ['React', 'JWT', 'Authentication'],
    votes: 24,
    answers: 5,
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Best practices for Node.js error handling in production?',
    summary: 'What are the recommended patterns for handling errors in Node.js applications when deployed to production environments?',
    tags: ['Node.js', 'Error Handling'],
    votes: 18,
    answers: 3,
    time: '4 hours ago',
  },
  {
    id: 3,
    title: 'Understanding React hooks vs class components',
    summary: 'When should I use React hooks versus class components? Are there specific use cases where one is better than the other?',
    tags: ['React', 'Hooks'],
    votes: 31,
    answers: 8,
    time: '6 hours ago',
  },
];

const QuestionList = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Latest Questions</h2>
    <div className="space-y-4">
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  </div>
);

export default QuestionList;
