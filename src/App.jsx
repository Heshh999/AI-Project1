import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Hobbies from './components/Hobbies.jsx'
import Trading from './components/Trading.jsx'
import ItSkills from './components/ItSkills.jsx'
import Resume from './components/Resume.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot2.jsx'

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      // ignore when typing in inputs, textareas or contenteditable elements
      const tag = (e.target && e.target.tagName) || ''
      const isEditable = e.target && (e.target.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA')
      if (isEditable) return

      if (e.key && e.key.toLowerCase() === 'c') {
        setChatOpen((v) => !v)
      }
      if (e.key === 'Escape') {
        setChatOpen(false)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="bg-dark-blue text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Hobbies />
      <Trading />
      <ItSkills />
      <Resume />
      <Footer />
      <button 
        onClick={() => setChatOpen(true)} 
        className="fixed bottom-4 right-4 bg-ripple-blue p-4 rounded-full shadow-lg ripple"
      >
        AI Chat
      </button>
      {chatOpen && <Chatbot onClose={() => setChatOpen(false)} />}
    </div>
  )
}

export default App
