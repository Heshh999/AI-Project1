import React, { useState, useEffect, useRef } from 'react'

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black w-96 h-96 flex flex-col rounded shadow-lg">
        <div className="flex justify-between p-2 border-b">
          <h3 className="font-bold">AI Assistant</h3>
          <button onClick={onClose}>X</button>
        </div>

        <div ref={containerRef} className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
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
          <button className="bg-ripple-blue text-white p-2 rounded-r ripple" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
import { useState, useEffect, useRef } from 'react'

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const newMessages = [...messages, { text: input, from: 'user' }]
    let response = "Sorry, I don't understand that."
    const lowerInput = input.toLowerCase()
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      response = 'Hello! How can I assist you today?'
    } else if (lowerInput.includes('trading')) {
      response = 'Justin has been trading stocks for 5 years and enjoys analyzing market trends.'
    } else if (lowerInput.includes('skills') || lowerInput.includes('it')) {
      response = 'Justin is skilled in web development, JavaScript, React, and more. Check the IT Skills section for a video!'
    } else if (lowerInput.includes('hobbies')) {
      response = "Justin's hobbies include gaming and stock trading."
    } else if (lowerInput.includes('resume')) {
      response = "You can download Justin's resume from the Resume section."
    }

    setMessages([...newMessages, { text: response, from: 'bot' }])
    setInput('')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black w-96 h-96 flex flex-col rounded shadow-lg">
        <div className="flex justify-between p-2 border-b">
          <h3 className="font-bold">AI Assistant</h3>
          <button onClick={onClose}>X</button>
        </div>
        <div ref={containerRef} className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
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
          />
          <button className="bg-ripple-blue text-white p-2 rounded-r ripple" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
import { useState, useEffect, useRef } from 'react'

function Chatbot({ onClose }) {
  import { useState, useEffect, useRef } from 'react'

  function Chatbot({ onClose }) {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const containerRef = useRef(null)

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight
      }
    }, [messages])

    const handleSend = () => {
      if (!input.trim()) return
      const newMessages = [...messages, { text: input, from: 'user' }]
      let response = "Sorry, I don't understand that."
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = 'Hello! How can I assist you today?'
      } else if (lowerInput.includes('trading')) {
        response = 'Justin has been trading stocks for 5 years and enjoys analyzing market trends.'
      } else if (lowerInput.includes('skills') || lowerInput.includes('it')) {
        response = 'Justin is skilled in web development, JavaScript, React, and more. Check the IT Skills section for a video!'
      } else if (lowerInput.includes('hobbies')) {
        response = "Justin's hobbies include gaming and stock trading."
      } else if (lowerInput.includes('resume')) {
        response = "You can download Justin's resume from the Resume section."
      }

      setMessages([...newMessages, { text: response, from: 'bot' }])
      setInput('')
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white text-black w-96 h-96 flex flex-col rounded shadow-lg">
          <div className="flex justify-between p-2 border-b">
            <h3 className="font-bold">AI Assistant</h3>
            <button onClick={onClose}>X</button>
          </div>
          <div ref={containerRef} className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
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
            />
            <button className="bg-ripple-blue text-white p-2 rounded-r ripple" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default Chatbot
  const [messages, setMessages] = useState([])
