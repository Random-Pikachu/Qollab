import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import QuestionPage from './Pages/QuestionPage';
import Ask from './Pages/Ask';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  )
}

export default App