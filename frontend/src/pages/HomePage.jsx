import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionList from '../components/QuestionList/QuestionList';
import SideBar from '../components/SideBarComponent/SideBar';

const HomePage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex flex-1 max-w-7xl mx-auto w-full py-8 px-4 gap-8">
      <section className="flex-1">
        <QuestionList />
      </section>
      <aside className="w-full max-w-xs">
        <SideBar />
      </aside>
    </main>
    <Footer />
  </div>
);

export default HomePage;
