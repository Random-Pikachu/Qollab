// import React, { useEffect, useState } from 'react';
// import QuestionCard from './QuestionCard';

// const QuestionList = () => {
//   const [questions, setQuestions] = useState([{
//     _id: "1",
//     title: "Sample Question",
//     description: "This is a sample question.",
//     tags: ["sample", "test"],
//     upvotes: 5,
//     downvotes: 1,
//     answers: [],
//     createdAt: new Date().toISOString()
//   }]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   const fetchQuestions = async () => {
//   //     setLoading(true);
//   //     setError(null);
//   //     try {
//   //       const res = await fetch('/api/questions'); // Adjust URL as needed
//   //       if (!res.ok) throw new Error('Failed to fetch questions');
//   //       const data = await res.json();
//   //       setQuestions(data);
//   //     } catch (err) {
//   //       setError(err.message || 'Something went wrong');
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchQuestions();
//   // }, []);

//   // if (loading) return <div>Loading questions...</div>;
//   // if (error) return <div className="text-red-500">{error}</div>;
//   // if (!questions.length) return <div>No questions found.</div>;

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Latest Questions</h2>
//       <div className="space-y-4">
//         {questions.map(q => 
//           (
//           <QuestionCard question={q} />
//         )
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuestionList;

import {React, useEffect, useState} from 'react'

const QuestionList = () => {

  const [questions, setQuestions] = useState([1,2,3]);
  useEffect(()=>{
    fetch('http://localhost:4600/api/questions').then(res => res.json()).then(data => {
      setQuestions(data);
    }).catch(err => console.log(err));
  }, [])
  const onCLickHanler = () => {
    console.log(questions);
  }
  return (
    <>
      {/* 
        The onClick function is not logging the data because the function name is misspelled as "onCLickHanler" instead of "onClickHandler".
        Also, ensure that the function is correctly referenced and the questions state is populated.
        Here is the corrected code:
      */}
      {/* <button onClick={() => console.log('hi')}>click me</button> */}

      {
        questions.map(q => {
          return(
            <div key={q._id}>
              <h1>{q.title}</h1>
              <p>{q.description}</p>
              <p>{q.tags}</p>
              <p>{q.upvotes}</p>
              <p>{q.downvotes}</p>
              <p>{q.answers}</p>
              <p>{q.createdAt}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default QuestionList