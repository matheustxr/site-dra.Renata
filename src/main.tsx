import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Global.css'

import ErrorPage from './pages/Error/ErrorPage'
import HomePage from './pages/Home/HomePage'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/About/AboutPage'
import EspecialidadePage from './pages/Especialidade/EspecialidadePage'
import CelebrePage from './pages/Celebre/CelebrePage'
import BackToTop from './components/BackToTop/BackToTop'
import { Chatbot } from './components/ChatbotPT'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sobre" element={<AboutPage />}/>
        <Route path="/especialidade" element={<EspecialidadePage />}/>
        <Route path="/celebre" element={<CelebrePage />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
    <Chatbot />
    <BackToTop />
    <Footer/>
  </React.StrictMode>,
)
