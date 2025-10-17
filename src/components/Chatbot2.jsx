import React, { useState, useEffect, useRef } from 'react'

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [minimized, setMinimized] = useState(false)
  const containerRef = useRef(null)

  // Auto-scroll only if user is near the bottom
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 120
    if (nearBottom) {
      // small timeout to allow new message DOM to render
      setTimeout(() => {
        el.scrollTop = el.scrollHeight
      }, 50)
    }
  }, [messages])

  const getBotResponse = (text) => {
    const t = text.toLowerCase()
    if (t.includes('hello') || t.includes('hi')) return 'Hello! How can I assist you today?'
    if (t.includes('trading')) return 'Justin has been trading stocks for 5 years and enjoys analyzing market trends.'
    if (t.includes('skills') || t.includes('it')) return 'Justin is skilled in web development, JavaScript, React, and more. Check the IT Skills section!'
    if (t.includes('hobbies')) return "Justin's hobbies include gaming and stock trading."
    if (t.includes('resume')) return "You can download Justin's resume from the Resume section."
    return "Sorry, I don't understand that. Try asking about trading, skills, hobbies, or resume."
  }

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg = { text: trimmed, from: 'user' }
    const botMsg = { text: getBotResponse(trimmed), from: 'bot' }
    setMessages((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  // Floating widget (bottom-right) that follows scroll because it's fixed
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {minimized ? (
        <div className="w-14 h-14 rounded-full bg-ripple-blue shadow-lg flex items-center justify-center text-white cursor-pointer" onClick={() => setMinimized(false)} title="Open chat">
          AI
        </div>
      ) : (
        <div className="bg-white text-black w-80 max-h-96 flex flex-col rounded shadow-lg">
          <div className="flex justify-between items-center p-2 border-b">
            <h3 className="font-bold">AI Assistant</h3>
            <div className="flex gap-2">
              <button className="text-sm px-2" onClick={() => setMinimized(true)} aria-label="minimize-chat">_</button>
              <button className="text-sm px-2" onClick={onClose} aria-label="close-chat">X</button>
            </div>
          </div>

          <div ref={containerRef} className="flex-1 overflow-y-auto p-3 space-y-2" style={{height: '18rem'}}>
            {messages.length === 0 && <div className="text-sm text-gray-500">Ask me about trading, skills, hobbies, or resume.</div>}
            {messages.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${msg.from === 'user' ? 'bg-ripple-blue text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex">
            <input
              className="flex-1 p-2 border rounded-l"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              aria-label="chat-input"
            />
            <button className="bg-ripple-blue text-white p-2 rounded-r ripple" onClick={handleSend} aria-label="send-chat">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
