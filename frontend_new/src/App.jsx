import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import QuestionPage from './Pages/QuestionPage';
import Ask from './Pages/Ask';
import AuthPage from './Pages/AuthPage';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App