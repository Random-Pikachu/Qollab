import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBarComponent/SideBar';
import QuestionDetails from '../components/QnA/QuestionDetails';
import AnswerList from '../components/QnA/AnswerList';
import AnswerForm from '../components/QnA/AnswerForm';

const QnAPage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/questions/${id}`)
      .then(res => res.json())
      .then(data => {
        setQuestion(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!question) return <div>Question not found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 max-w-7xl mx-auto w-full py-8 px-4 gap-8">
        <section className="flex-1">
          <QuestionDetails question={question} />
          <AnswerList answers={question.answers} />
          <AnswerForm questionId={question._id} />
        </section>
        <aside className="w-full max-w-xs">
          <SideBar />
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default QnAPage;